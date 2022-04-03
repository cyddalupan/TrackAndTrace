<?php

namespace App\Http\Controllers;

use App\FbUser;
use App\ChatLog;
use App\FbQuest;
use App\Reply;
use App\UniqueChat;
use App\CategoryKeyword;
use App\Hitkey;
use App\HitkeySeverity;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ChatController extends Controller
{
    private $hubVerifyToken = 'ANTOKEN';
    private $accessToken =   "EAADErmt3SukBANlkG6esyZAZAHae1J6XZCLRCGCFCzu5spqH1X2Peznv59D1xS6bEtTCpstObQH6AZCBJeymBA9adSkZADWAeamZBEhsDNdovysMDr8Wvu2DLuNvGaD5ZBQVmPzS5zMfXZA2J068N0sffdkQDRqhjF7xQ3mvxcIAJZB44eoBW4uRveiURJATqi9UZD";
    // I am "EAAHMEWqDwqYBAM7uxdYun6IX4SSBagYycPIqKAoPZB5odQizuvKXZCBZCPdMVp7TRcksTrQ5fc1vJFP530yUiZC59Icn8pefOzUZBfKPvMsVahegvM0rtXpvLAjHezj0rTtYBjRli9JqH8DaCJYQx3py5yAwMZAF9QsneRKMEkPvLumq0ptRai";
    //step "EAADErmt3SukBANlkG6esyZAZAHae1J6XZCLRCGCFCzu5spqH1X2Peznv59D1xS6bEtTCpstObQH6AZCBJeymBA9adSkZADWAeamZBEhsDNdovysMDr8Wvu2DLuNvGaD5ZBQVmPzS5zMfXZA2J068N0sffdkQDRqhjF7xQ3mvxcIAJZB44eoBW4uRveiURJATqi9UZD";

    /**
     * This is the hook to connect facebook.
     */
    public function hello(Request $request)
    {
        // check token at setup
        if ($request->input('hub_verify_token') === $this->hubVerifyToken) {
            echo $request->input('hub_challenge');
            exit;
        }

        $json_return = file_get_contents('php://input');
        $input = json_decode($json_return, true);

        $txt = var_export($json_return, true);

        //Storage::disk('local')->put('file.txt', $txt);
        // Get started
        if (isset($input['entry'][0]['messaging'][0]['postback']))
        {
            $senderId = $input['entry'][0]['messaging'][0]['sender']['id'];
            $messageText = $input['entry'][0]['messaging'][0]['postback']['title'];
            //$messageText = "Get started";
            if(isset($input['entry'][0]['messaging'][0]['postback']['payload']))
            {
                $payload = $input['entry'][0]['messaging'][0]['postback']['payload'];
				$fbUser = FbUser::where('fb_id', $senderId)->first();				
				
				if($fbUser) {
					// Payload from persistent menu
					switch($payload)
					{
						case "MENU_1":
							$fbUser->fb_quest_id = 69;
							break;
						case "MENU_2":
							$fbUser->fb_quest_id = 69;
							break;
						case "MENU_3":
							$fbUser->fb_quest_id = 69;
							break;		
					}
					$fbUser->save();
				}			
            }
            $returnObj = $this->process($senderId,$messageText);
        }
        // Standard message
        else if(isset($input['entry'][0]['messaging'][0]['message']['text'])){
            $senderId = $input['entry'][0]['messaging'][0]['sender']['id'];
            $messageText = trim($input['entry'][0]['messaging'][0]['message']['text']);
            $returnObj = $this->process($senderId,$messageText);
        }
        else
        {
            return;
        }
		
		// FOR DEVELOPMENT DO NOT REMOVE
        //   $chatLog = new ChatLog;
        //   $chatLog->fb_users_id = 101010;
        //   $chatLog->fb_users_name = 'TEST';
        //   $chatLog->user_message = $input['entry'][0]['id'];
        //   $chatLog->bot_message = 'TEST';
        //   $chatLog->save();
		

        //Stops process when theres no reply.
        if($returnObj['message'] == ''){
            return;
        }

        //send message to facebook bot
		$response = [
            'messaging_type' => 'RESPONSE',
            'recipient' => [ 'id' => $senderId ],
            'message' => ['text' => $returnObj['message']],
        ];
		
        /*$response = [
                    'messaging_type' => 'RESPONSE',
                    'recipient' => ['id' => $senderId],
                    'message' =>
                        [
                            "attachment" =>
                                [
                                    "type" => 'template',
                                    "payload" =>
                                        [
                                            "template_type" => "generic",
											"elements" =>
												[
													0 =>
														[
															"image_url" => $returnObj['image_url'],
															"title" => $returnObj['message'],
														],
																											
												]
                                        ]
                                ]
                        ]
                ];*/
				

        // Setup quick reply.
        if($returnObj['rule'] !== ""){
            $quickreply = [];
            $sets = explode(",",$returnObj['rule']);
            $ctr = 0;
            foreach($sets as $set){
                // Separate condition and id.
                $data = explode(":",$set);

                // dont add variable to choices
                if (strpos($data[0], '}}') === false) {
                    array_push($quickreply,[
                        "type" => "postback",
                        "title" => $data[0],
                        "payload"=>"OPTION_$ctr"
                    ]);
                }
				$ctr++;
            }

            if(count($quickreply) > 0){

                $response = [
                    'messaging_type' => 'RESPONSE',
                    'recipient' => ['id' => $senderId],
                    'message' =>
                        [
                            "attachment" =>
                                [
                                    "type" => 'template',
                                    "payload" =>
                                        [
                                            "template_type" => "generic",
											"elements" =>
												[
													0 =>
														[
															"image_url" => $returnObj['image_url'],
															"title" => $returnObj['message'],
															"buttons" => $quickreply	
														],
																											
												]
                                        ]
                                ]
                        ]
                ];
				
            }
        }
		
		Storage::disk('local')->put('file.txt', var_export($response, true));


        $ch = curl_init('https://graph.facebook.com/v6.0/me/messages?access_token='.$this->accessToken);
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($response));
        curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
        if(!empty($input)){
            $result = curl_exec($ch);
        }
        curl_close($ch);
    }

    /**
     * Use to test chat without using messenger.
     *
     * @return logs of chat
     */
    public function test_chat($fb_id,$message)
    {
        $returnObj = $this->process($fb_id,$message);
      
        // Setup quick reply.
        $quickreply = [];
        if($returnObj['rule'] !== ""){
          $sets = explode(",",$returnObj['rule']);
          foreach($sets as $set){
            // Separate condition and id.
            $data = explode(":",$set);
            // dont add variable to choices
            if (strpos($data[0], '}}') === false) {
              array_push($quickreply, $data[0]);
            }
          }
        }
      
        echo "<div>";
        echo "Bot Reply: ".$returnObj['message'];
        echo "</div>";
        echo "<div>";
        echo "Quick Replies: ".implode(",", $quickreply);
        echo "</div>";
      
        // print chatlogs
        $chatlogs = ChatLog::orderBy('created_at', 'desc')->limit(10)->get();
        echo "<br><h3>Recent logs</h3><br><div><table border='1'>";
        echo "<tr>";
        echo "<td>user id</td>";
        echo "<td>user name</td>";
        echo "<td>user message</td>";
        echo "<td>bot message</td>";
        echo "</tr>";
        foreach ($chatlogs as $log) {
            echo "<tr>";
            echo "<td>".$log->fb_users_id."</td>";
            echo "<td>".$log->fb_users_name."</td>";
            echo "<td>".$log->user_message."</td>";
            echo "<td>".$log->bot_message."</td>";
            echo "</tr>";
        }
        echo "</table></div>";
      
        // Print Query Variables
        $fbUser = FbUser::where('fb_id', $fb_id)->first();
        $quest = FbQuest::find($fbUser->fb_quest_id);
        if($quest){
          $raw_query = "";
          if(isset($quest->get_query)){$raw_query = $quest->get_query;};
          $variables = $this->availableVariable($fbUser,$raw_query, $message);

          echo "<br><h3>Usable Variables</h3><br><div><table border='1'>";
          echo "<tr>";
          echo "<td>Variable name</td>";
          echo "<td>Value</td>";
          echo "</tr>";
          foreach ($variables as $key => $value) {
            $usableVar[$key] = $value;
            echo "<tr>";
            echo "<td>".$key ."</td>";
            echo "<td>".$value."</td>";
            echo "</tr>";
          }
          echo "</table></div>";
        }
    }

    /**
     * Process the users chat.
     *
     * @param  fb_id string
     * @param  fb_id string
     * @return {reply:string,rule:array}
     */
    public function process($fb_id,$message)
    {
		//Storage::disk('local')->put('file.txt', "222");
      $message = strtolower($message);
      $next = 0;
      $fbUser = FbUser::where('fb_id', $fb_id)->first();

      // if current fb user.
      if($fbUser) {
        // 10 is blocked user.
        if($fbUser->fb_quest_id == 10) {
          return [
            'message' => "",
            'rule' => "",
          ];
        }
        
        // Send to quick reply logic
        if(($fbUser->fb_quest_id == 8) || ($fbUser->fb_quest_id == 5)){
          return $this->reply($fbUser, $message);
        }

        // Run current quest.
        $next = $this->quest($fbUser, $message);
      }else {
        $fbUser = new FbUser;
        $fbUser->fb_id = $fb_id;
        $fbUser->fb_quest_id = 27;
		$name = "Facebook user";
		// Get current Facebook name
		$url = "https://graph.facebook.com/v2.6/$fb_id?access_token={$this->accessToken}";
		$ch = curl_init($url);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

		$result = curl_exec($ch);
		if($result !== false) {
			$json = json_decode($result, true);
			if (!empty($json) && isset($json['first_name'])) {
				$name = $json['first_name'] . " " . $json['last_name'];
			}
		}
		$fbUser->fb_name = $name;
		
        $fbUser->save();
        $next = 27;
      }
      
	  
	  
      // Send next quest
      $resultObj = $this->getNext($next, $fbUser, $message);
      
      // Update chatlogs.
      $chatLog = new ChatLog;
      $chatLog->fb_users_id = $fbUser->id;
      $chatLog->fb_users_name = $fbUser->fb_name;
      $chatLog->user_message = $message;
      $chatLog->bot_message = $resultObj['message'];
      $chatLog->save();
	  
	  
      
      // Send reply.
      return $resultObj;
    }
  
    /**
     * Get the next message and save current id.
     *
     * @param  nextId integer
     * @param  fbUser object
     * @return {reply:string,rule:array}
     */
    public function getNext($nextId, $fbUser, $message){
      if(($nextId == null) || ($nextId == 0)){$nextId = 8;};

      // Save next quest;
      $fbUser->fb_quest_id = $nextId;
      $fbUser->save();
      
      // Refresh user
      $fbUser = FbUser::find($fbUser->id);
      
      // Get quest data
      $quest = FbQuest::find($nextId);
      
      // Get Full variable.
      $raw_query = "";
      if(isset($quest->get_query)){$raw_query = $quest->get_query;};
      $usableVar = $this->availableVariable($fbUser, $raw_query, $message);
     
      // Convert variables from message
      return [
        'message' => $this->convertVariables($usableVar, $quest->message),
        'rule' => $this->convertVariables($usableVar, $quest->rule),
		'image_url' => $quest->image_url,
      ];
    }

    /**
     * See the quest id and execute the code.
     *
     * @param  fb_user object
     * @param  message string
     * @return integer
     */
    public function quest($fbUser, $message)
    {
      $nextQuestId = 0;
      
      // Get quest data
      $quest = FbQuest::find($fbUser->fb_quest_id);
      
      // Get Full variable
      $raw_query = "";
      if(isset($quest->get_query)){$raw_query = $quest->get_query;};
      $usableVar = $this->availableVariable($fbUser, $raw_query, $message);

      // convert variables from rule
      $convertedRule = $this->convertVariables($usableVar, $quest->rule);
      
      // convert variables from correct_query
      $convertedCorrectQuery = $this->convertVariables($usableVar, $quest->correct_query);
      
      // convert variables from	wrong_query
      $convertedWrongQuery = $this->convertVariables($usableVar, $quest->wrong_query);
      
      // check rule if correct
      if($convertedRule){
        // separate each rules.
        $sets = explode(",",$convertedRule);
        foreach($sets as $set){
          // Separate condition and id.
          $data = explode(":",$set);
          if(strtolower($message) == strtolower($data[0])){
            if($convertedCorrectQuery){
              DB::statement($convertedCorrectQuery);
            }
            $nextQuestId = (int)$data[1];
          }
        }
      } 
      
      if($nextQuestId == 0){
        if($convertedWrongQuery){
          DB::statement($convertedWrongQuery);
        }

        if($quest->wrong_redirect_id == null){
          $nextQuestId = (int)$quest->id;
        }else{
          $nextQuestId = (int)$quest->wrong_redirect_id;
        }
      }
     
      return $nextQuestId;
    }

    /**
     * Get additional data from database
     *
     * @param   fbUser object
     * @param   query string
     * @param   message string
     * @return  $usableVar
     */
    public function availableVariable($fbUser,$query, $message)
    {
       // Declare the usable variable
      $usableVar = [];

      // Get query data
      $usableVar["message"] = $message;
      $usableVar["fb_name"] = $fbUser->fb_name;
      $usableVar["fb_id"] = $fbUser->fb_id;
      $usableVar["fb_user_type_id"] = $fbUser->fb_user_type_id;
      $usableVar["fb_person_id"] = $fbUser->fb_person_id;
      $usableVar["fb_quest_id"] = $fbUser->fb_quest_id;
      $usableVar["fb_variable"] = $fbUser->fb_variable;
      
      if((isset($query)) && ($query !== "")){
        $query = $this->convertVariables($usableVar, $query);
        $data = DB::select($query);
        if($data){
          foreach ($data[0] as $key => $value) {
            $usableVar[$key] = $value;
          }
        }
      }

      return $usableVar;
    }
  
    /**
     * Convert string variables
     *
     * @param   variables object
     * @param   rawString string
     * @return  string
     */
    public function convertVariables($variables, $rawString)
    {
      foreach ($variables as $key => $value) {
        $rawString = str_replace("{{".$key."}}",$value ,$rawString);
      }
      return $rawString;
    }

    /**
     * Get the next message and save current id.
     *
     * @param  fbUser object
     * @param  message string
     * @return {reply:string,rule:array}
     */
    public function reply($fbUser, $message){
      $reply = Reply::where('message', $message)->first();
      $is_hit = false;

      if($reply){
        // When reply is number
        if(is_numeric($reply->reply)) {
          return $this->getNext((int)$reply->reply, $fbUser, $message);
        }
          
        return [
          'message' => $reply->reply,
          'rule' => "",
        ];
      }else{
        $inUnique = UniqueChat::where('message', $message)->first();

        $uniqie_chat_id = 0;

        if(!$inUnique){
          if (strlen($message) > 160) {
             $message = substr($message, 0, 160) . '...';
          }

          $data = new UniqueChat;
          $data->message = $message;
          $data->fb_id = $fbUser->fb_id;
          $data->is_closed = false;
          $data->save();
          $uniqie_chat_id = $data->id;
        }else{
          $uniqie_chat_id = $inUnique->id;
        }

        $is_hit = $this->findKeyWords($fbUser->fb_id, $uniqie_chat_id ,$message);

        if($is_hit) {
          return [
            'message' => "I see, I will get back to you ASAP.",
            'rule' => "",
          ];
        }

        return [
          'message' => "",
          'rule' => "",
        ];
      }
    }

    /**
     * Search keyworkds from message.
     *
     * @param  uniqie_chat_id string
     * @param  message string
     * @return is_hit
     */
    public function findKeyWords($fb_id, $uniqie_chat_id, $message){
      $keywords = CategoryKeyword::all();

      $hitkey = new Hitkey;

      $is_hit = false;
      $last_hit_category_id = 0;

      foreach ($keywords as $keyword) {
        if(strpos($this->clean($message), $this->clean($keyword->keyword)) !== false){
          //first time hit
          if(!$is_hit) {
            $hitkey->unique_chat_id = $uniqie_chat_id;
            $hitkey->fb_id = $fb_id;
            $hitkey->is_report = false;
            $hitkey->is_done = false;
            $hitkey->save();
          }

          if($last_hit_category_id !== $keyword->category_id){
              $last_hit_category_id = $keyword->category_id;
              $severities = new HitkeySeverity;
              $severities->hitkey_id = $hitkey->id;
              $severities->category_id = $keyword->category_id;
              $severities->severity = 0;
              $severities->save();
          }

          $is_hit = true;
        }
      }

      return $is_hit;
    }
  
  public function clean($string) {
     $string = strtolower($string);
     //$string = str_replace(' ', '-', $string); // Replaces all spaces with hyphens.

     return preg_replace('/[^A-Za-z0-9\-]/', '', $string); // Removes special chars.
  }
  
  public function update($senderId, $returnObj) {
      $response = null;

      //Stops process when theres no reply.
      if($returnObj['message'] == ''){
        return;
      }
      
      //send message to facebook bot
      $response = [
          'recipient' => [ 'id' => $senderId ],
          'message' => ['text' => $returnObj['message']],
      ];
      
      // Setup quick reply.
      if($returnObj['rule'] !== ""){
        $quickreply = [];
        $sets = explode(",",$returnObj['rule']);
        foreach($sets as $set){
          // Separate condition and id.
          $data = explode(":",$set);
          
          // dont add variable to choices
          if (strpos($data[0], '}}') === false) {
            array_push($quickreply,[
              "content_type" => "text",
              "title" => $data[0],
              "payload"=>""
            ]);
          }
        }
        
        if(count($quickreply) > 0){
          // Add quick reply
          $response = [
            'recipient' => [ 'id' => $senderId ],
            'message' => [
              'text' => $returnObj['message'],
              "quick_replies"=>$quickreply
            ],
          ]; 
        }
      }
      
      

      $ch = curl_init('https://graph.facebook.com/v4.0/me/messages?access_token='.$this->accessToken);
      curl_setopt($ch, CURLOPT_POST, 1);
      curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($response));
      curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
      $result = curl_exec($ch);
      curl_close($ch);
  }
  
  public function updateTemplate(
    $fb_id,
    $title,
    $image,
    $message,
    $button_name_1,
    $button_link_1,
    $button_name_2,
    $button_link_2,
    $button_name_3,
    $button_link_3) {
    $response = null;
    
    $allButtons = '{
      "type":"web_url",
      "url":"'.$button_link_1.'",
      "title":"'.$button_name_1.'"
    }';
    
    // Second button exist more buttons.
    if(($button_name_2 !== '') && ($button_link_2 !== '')){
      $allButtons =  $allButtons.',{
        "type":"web_url",
        "url":"'.$button_link_2.'",
        "title":"'.$button_name_2.'"
      }';
    }
    
    // Third button exist more buttons.
    if(($button_name_3 !== '') && ($button_link_3 !== '')){
      $allButtons =  $allButtons.',{
        "type":"web_url",
        "url":"'.$button_link_3.'",
        "title":"'.$button_name_3.'"
      }';
    }
    
    $jsonData = '{
        "recipient":{
            "id":"'.$fb_id.'"
        },
        "message":{
          "attachment":{
            "type":"template",
            "payload":{
              "template_type":"generic",
              "elements":[
                 {
                  "title":"'.$title.'",
                  "image_url":"'.$image.'",
                  "subtitle":"'.$message.'",
                  "buttons":['.$allButtons.']      
                }
              ]
            }
          }
        }
    }';

    //Encode the array into JSON.
    $jsonDataEncoded = $jsonData;

    $ch = curl_init('https://graph.facebook.com/v4.0/me/messages?access_token='.$this->accessToken);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $jsonDataEncoded);
    curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
    $result = curl_exec($ch);
    curl_close($ch);
  }
  
}
