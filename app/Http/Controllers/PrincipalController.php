<?php

namespace App\Http\Controllers;

use App\Principal;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PrincipalController extends Controller
{
    private $pageurl = 'principal';
    private $pageName = 'Principal';

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

        $count = Principal::where('agency_id',$_SESSION['agency_id'])->count();
        $lastPage = ceil($count/$take);
        $datas = Principal::where('agency_id',$_SESSION['agency_id'])
                    ->orderBy($sort, $order)
                    ->skip($skip)
                    ->take($take)
                    ->get();
                    
        return view('principal', [
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
        return view('principal_add',[
            'pageurl' => $this->pageurl,
            'pageName' => $this->pageName,
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
            'contact' => 'required|max:255',
            'address' => 'required|max:255',
            'email' => 'required|email|max:255',
        ]);

        if ($validator->fails()) {
            return back()
                        ->withErrors($validator)
                        ->withInput();
        }

        $data = new Principal;
        $data->agency_id = $_SESSION['agency_id'];
        $data->name = $request->input('name');
        $data->contact = $request->input('contact');
        $data->address = $request->input('address');
        $data->email = $request->input('email');
        $data->save();

        return redirect($this->pageurl)->with('message', $this->pageName.' Added');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Principal  $principal
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $current =  Principal::find($id);

        return view('principal_single', [
            'current' => $current,
            'pageurl' => $this->pageurl,
            'pageName' => $this->pageName,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Principal  $principal
     * @return \Illuminate\Http\Response
     */
    public function edit(Principal $principal)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Principal  $principal
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:255',
            'contact' => 'required|max:255',
            'address' => 'required|max:255',
            'email' => 'required|email|max:255',
        ]);

        if ($validator->fails()) {
            return back()
                        ->withErrors($validator)
                        ->withInput();
        }

        $data = Principal::find($id);
        $data->name = $request->input('name');
        $data->contact = $request->input('contact');
        $data->address = $request->input('address');
        $data->email = $request->input('email');
        $data->save();

        return back()->with('message', $this->pageName.' Saved');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Principal  $principal
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Principal::destroy($id);
        return redirect($this->pageurl)->with('message', $this->pageName.' Deleted');
    }
}
