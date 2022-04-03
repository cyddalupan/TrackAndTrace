<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Person;

class CsvController extends Controller
{
    public function upload(Request $request)
    {
        $message = 'Upload CSV file';

        if ($request->hasFile('file')) {
            $name = $request->file('file');
            $file = fopen($name,"r");

            $first = true;
            while (($data = fgetcsv($file, 1000, ",")) !== FALSE) 
            {
                if(!$first){
                    if(Person::where('passport_number', $data[4])->doesntExist()){
                        $person = new Person;
                        $person->name = utf8_decode($data[0]);
                        $person->contact = $data[1];
                        $person->address = utf8_decode($data[2]);
                        $person->birthday = $data[3];
                        $person->passport_number = $data[4];
                        $person->hire_date = $data[5];
                        $person->deployed_date = $data[6];
                        $person->usertype_id = (int)$data[7];
                        $person->country_id = (int)$data[8];
                        $person->principal_id = (int)$data[9];
                        $person->agent_id = (int)$data[10];
                        $person->applicant_status_id = (int)$data[11];
                        $person->save();
                    }
                }else{
                    $first = false;
                }
            }
            fclose($file);
            
            $message = 'Upload Success';
        }
        return view('upload-csv',['message' => $message]);
    }
}
