<?php
namespace App\Http\Middleware;

use Closure;

class CheckLogin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        session_start();
        if (!isset($_SESSION['admin_id'])) {
            return redirect('login');
        }
        
        if (!isset($_SESSION['agency_id']) || ($_SESSION['agency_id'] == 0)) {
            if ($_SESSION['admin_level'] == 2){ 
                return redirect('noagency');
            }
        }
        
        return $next($request);
    }
}