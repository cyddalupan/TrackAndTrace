<?php

namespace App\Http\Controllers;

use App\Casegen;
use App\FbQuest;
use Illuminate\Http\Request;

class CasegenController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $casegen = Casegen::with('quest')->get();
        return $casegen;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
      
      /*
      Required fields.      
      
      message
      rule
      category_id
      subcategory
      claimant
      severity
      remarks
      */
      
      // Save quest
      if($request->quest_id){
        $quest = FbQuest::find($request->quest_id);
      }else{ 
        $quest = new FbQuest;
      }
      $quest->message = $request->message;

      if($request->rule){
        $quest->rule = $request->rule;
      }

      if($request->category_id){
        $quest->correct_query = "INSERT INTO `reports`(`fb_id`, `agency_id`, `person_id`, `report_category_id`, `sub_category`, `claimant`, `severity`, `is_active`, `remarks`) VALUES ('{{fb_id}}', ".$_SESSION['agency_id'].", '{{fb_person_id}}', '".$request->category_id."', '".$request->subcategory."', '".$request->claimant."', '".$request->severity."', '1', '".$request->remarks."')";
      }

      $quest->save();
      $quest->wrong_redirect_id = $quest->id;

      // Save casegen
      if($request->casegen_id){
        $casegen = Casegen::find($request->casegen_id);
      }else{ 
        $casegen = new Casegen;
      }
      $casegen->quest_id = $quest->id;
      $casegen->report_category_id = $request->category_id;
      $casegen->subcategory = $request->subcategory;
      $casegen->claimant = $request->claimant;
      $casegen->severity = $request->severity;
      $casegen->remarks = $request->remarks;
      $casegen->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Casegen  $casegen
     * @return \Illuminate\Http\Response
     */
    public function show(Casegen $casegen)
    {
        //
    }
  
  public function edit(Casegen $casegen)
    {
        return "karent";
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Casegen  $casegen
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Casegen $casegen)
    {
      
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Casegen  $casegen
     * @return \Illuminate\Http\Response
     */
    public function destroy(Casegen $casegen)
    {
        //
    }
}
