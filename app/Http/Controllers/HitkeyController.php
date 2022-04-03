<?php

namespace App\Http\Controllers;

use App\Hitkey;
use App\HitkeySeverity;
use App\Report;
use App\ReportSeverity;
use App\UniqueChat;
use App\ReportCategory;
use Illuminate\Http\Request;

class HitkeyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Hitkey::where('is_done',0)
                    ->with("severities")
                    ->with('severities.category')
                    ->with("unique")
                    ->first();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $totalSeverity = 0;

        foreach($request->severities as $severity) {
            $totalSeverity = $totalSeverity + $severity['severity'];

            $hitkeySeverity = HitkeySeverity::find($severity['id']);
            
            $reportCategory = ReportCategory::find($hitkeySeverity->category_id);
            
            $hitkeySeverity->category_name = $reportCategory->name;
            $hitkeySeverity->display = $reportCategory->name."(".$severity['severity'].")";
            $hitkeySeverity->severity = $severity['severity'];
            $hitkeySeverity->save();
        }

        $hitkey =  Hitkey::find($request->id);
        $hitkey->is_done = 1;
        $hitkey->save();
        
        if($totalSeverity !== 0) {
            $unique = UniqueChat::find($hitkey->unique_chat_id);
            
            $report = new Report;
            $report->fb_id = $hitkey->fb_id;
            $report->sub_category = "";
        	$report->claimant = "facebook";
        	$report->is_active = 1;
        	$report->remarks = "User message:".$unique->message;
        	$report->save();
        	
        	foreach($request->severities as $severity) {
                $hitkeySeverity = HitkeySeverity::find($severity['id']);
                $reportCategory = ReportCategory::find($hitkeySeverity->category_id);
    
                $report_severity = new ReportSeverity;
                $report_severity->report_id	= $report->id;
                $report_severity->category_name = $reportCategory->name;
                $report_severity->category_id = $hitkeySeverity->category_id;
                $report_severity->severity = $hitkeySeverity->severity;
                $report_severity->save();
            }
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Hitkey  $hitkey
     * @return \Illuminate\Http\Response
     */
    public function show(Hitkey $hitkey)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Hitkey  $hitkey
     * @return \Illuminate\Http\Response
     */
    public function edit(Hitkey $hitkey)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Hitkey  $hitkey
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Hitkey $hitkey)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Hitkey  $hitkey
     * @return \Illuminate\Http\Response
     */
    public function destroy(Hitkey $hitkey)
    {
        //
    }
}
