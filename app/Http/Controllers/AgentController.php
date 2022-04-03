<?php

namespace App\Http\Controllers;

use App\Agent;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Person;

class AgentController extends Controller
{
    private $pageurl = 'agent';
    private $pageName = 'Agent';

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

        $count = Agent::where('agency_id',$_SESSION['agency_id'])->count();
        $lastPage = ceil($count/$take);
        $datas = Agent::where('agency_id',$_SESSION['agency_id'])
                    ->orderBy($sort, $order)
                    ->with('person')
                    ->skip($skip)
                    ->take($take)
                    ->get();
                    
        return view('agent', [
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
        $persons = Person::all();

        return view('agent_add',[
            'pageurl' => $this->pageurl,
            'pageName' => $this->pageName,
            'persons' => $persons,
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
            'name' => 'required|max:255',
        ]);

        if ($validator->fails()) {
            return back()
                        ->withErrors($validator)
                        ->withInput();
        }

        $data = new Agent;
        $data->agency_id = $_SESSION['agency_id'];
        $data->person_id = $request->input('person_id');
        $data->name = $request->input('name');
        $data->save();

        return redirect($this->pageurl)->with('message', $this->pageName.' Added');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Agent  $agent
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $current =  Agent::find($id);
        $persons = Person::all();

        return view('agent_single', [
            'current' => $current,
            'pageurl' => $this->pageurl,
            'pageName' => $this->pageName,
            'persons' => $persons,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Agent  $agent
     * @return \Illuminate\Http\Response
     */
    public function edit(Agent $agent)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Agent  $agent
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:255',
        ]);

        if ($validator->fails()) {
            return back()
                        ->withErrors($validator)
                        ->withInput();
        }

        $data = Agent::find($id);
        $data->person_id = $request->input('person_id');
        $data->name = $request->input('name');
        $data->save();

        return back()->with('message', $this->pageName.' Saved');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Agent  $agent
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Agent::destroy($id);
        return redirect($this->pageurl)->with('message', $this->pageName.' Deleted');
    }
}
