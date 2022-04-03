<?php

namespace App\Http\Controllers;

use App\Schedule;
use App\FbUser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ScheduleController extends Controller
{
    private $pageurl = 'schedule';
    private $pageName = 'Schedule';

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $take = 20;

        // Get Sort
        $sort = 'id';
        if($request->input('sort')){
            $sort = $request->input('sort');
        }

        // Get order
        $order = 'asc';
        if($request->input('order')){
            $order = $request->input('order');
        }

        // Get skip
        $page = 1;
        if($request->input('page')){
            $page = $request->input('page');
        }

        // Compute skip and take
        $skip = ($page-1)*$take;

        $count = Schedule::where('agency_id',$_SESSION['agency_id'])->count();
        $lastPage = ceil($count/$take);
        $datas = Schedule::where('agency_id',$_SESSION['agency_id'])
                    ->orderBy($sort, $order)
                    ->skip($skip)
                    ->take($take)
                    ->get();
                    
        return view('schedule', [
            'pageurl' => $this->pageurl,
            'pageName' => $this->pageName,
            'datas' => $datas,
            'sort' => $sort,
            'order' => $order,
            'page' => $page,
            'lastPage' => $lastPage,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $months = [1,2,3,4,5,6,7,8,9,10,11,12];
        $currentYear = date("Y");
        $years = [];
        for ($i=$currentYear; $i < ($currentYear+20); $i++) { 
            array_push($years, $i);
        }

        return view('schedule_add',[
            'pageurl' => $this->pageurl,
            'pageName' => $this->pageName,
            'months' => $months,
            'years' => $years,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|max:255',
            'photo' => 'required|image',
            'message' => 'required|max:255',
            'button_name_1' => 'required|max:45',
            'button_link_1' => 'required|max:45',
            'button_name_2' => 'max:45',
            'button_link_2' => 'max:45',
            'button_name_3' => 'max:45',
            'button_link_3' => 'max:45',
            'month' => 'required',
            'year' => 'required',
        ]);

        if ($validator->fails()) {
            return back()
                        ->withErrors($validator)
                        ->withInput();
        }

        $button_name_2 = '';
        if($request->input('button_name_2')) {
            $button_name_2 = $request->input('button_name_2');
        }
        $button_link_2 = '';
        if($request->input('button_link_2')) {
            $button_link_2 = $request->input('button_link_2');
        }
        $button_name_3 = '';
        if($request->input('button_name_3')) {
            $button_name_3 = $request->input('button_name_3');
        }
        $button_link_3 = '';
        if($request->input('button_link_3')) {
            $button_link_3 = $request->input('button_link_3');
        }

        $data = new Schedule;
        $data->agency_id = $_SESSION['agency_id'];
        $data->title = $request->input('title');
        if ($request->hasFile('photo')) {
            if ($request->file('photo')->isValid()) {
                $path = $request->photo->store('image');
                $data->image = $path;
            }
        }
        $data->message = $request->input('message');
        $data->button_name_1 = $request->input('button_name_1');
        $data->button_link_1 = $request->input('button_link_1');
        $data->button_name_2 = $button_name_2;
        $data->button_link_2 = $button_link_2;
        $data->button_name_3 = $button_name_3;
        $data->button_link_3 = $button_link_3;
        $data->month = $request->input('month');
        $data->year = $request->input('year');
        $data->save();

        return redirect($this->pageurl)->with('message', $this->pageName.' Added');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Schedule  $schedule
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $current =  Schedule::find($id);

        $months = [1,2,3,4,5,6,7,8,9,10,11,12];
        $currentYear = date("Y");
        $years = [];
        for ($i=$currentYear; $i < ($currentYear+20); $i++) { 
            array_push($years, $i);
        }

        return view('schedule_single', [
            'current' => $current,
            'pageurl' => $this->pageurl,
            'pageName' => $this->pageName,
            'months' => $months,
            'years' => $years,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Schedule  $schedule
     * @return \Illuminate\Http\Response
     */
    public function edit(Schedule $schedule)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Schedule  $schedule
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|max:255',
            'message' => 'required|max:255',
            'button_name_1' => 'required|max:45',
            'button_link_1' => 'required|max:45',
            'button_name_2' => 'max:45',
            'button_link_2' => 'max:45',
            'button_name_3' => 'max:45',
            'button_link_3' => 'max:45',
            'month' => 'required',
            'year' => 'required',
        ]);

        if ($validator->fails()) {
            return back()
                        ->withErrors($validator)
                        ->withInput();
        }

        $button_name_2 = '';
        if($request->input('button_name_2')) {
            $button_name_2 = $request->input('button_name_2');
        }
        $button_link_2 = '';
        if($request->input('button_link_2')) {
            $button_link_2 = $request->input('button_link_2');
        }
        $button_name_3 = '';
        if($request->input('button_name_3')) {
            $button_name_3 = $request->input('button_name_3');
        }
        $button_link_3 = '';
        if($request->input('button_link_3')) {
            $button_link_3 = $request->input('button_link_3');
        }

        $data = Schedule::find($id);
        $data->title = $request->input('title');
        if ($request->hasFile('photo')) {
            if ($request->file('photo')->isValid()) {
                $path = $request->photo->store('image');
                $data->image = $path;
            }
        }
        $data->message = $request->input('message');
        $data->button_name_1 = $request->input('button_name_1');
        $data->button_link_1 = $request->input('button_link_1');
        $data->button_name_2 = $button_name_2;
        $data->button_link_2 = $button_link_2;
        $data->button_name_3 = $button_name_3;
        $data->button_link_3 = $button_link_3;
        $data->month = $request->input('month');
        $data->year = $request->input('year');
        $data->save();

        return back()->with('message', $this->pageName.' Saved');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Schedule  $schedule
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Schedule::destroy($id);
        return redirect($this->pageurl)->with('message', $this->pageName.' Deleted');
    }

    public function sendchat($id)
    {
        $sched = Schedule::find($id);

        $testIDs = ['2960913403928792'];

        foreach ($testIDs as $testId) {
            // Trigger the send message.
            app('App\Http\Controllers\ChatController')->updateTemplate(
            $testId,
            $sched->title,
            url('/').'./../storage/app/'.$sched->image,
            $sched->message,
            $sched->button_name_1,
            $sched->button_link_1,
            $sched->button_name_2,
            $sched->button_link_2,
            $sched->button_name_3,
            $sched->button_link_3);
        }
        return back()->with('message', 'Test Message Sent.');
    }
}
