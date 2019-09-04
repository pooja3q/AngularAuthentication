import { Injectable , Injector} from '@angular/core';
import { HttpInterceptor} from '@angular/common/http'

import { AuthService } from './auth.service'

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

constructor(private _injector :Injector , private _auth :AuthService){}

  intercept(req, next) {
    let authservice = this._injector.get(AuthService)
    
    let val =authservice.getToken();
    console.log(` bak === ${authservice.getToken()}`);
    let TokenizedReq =req.clone({
      setHeaders: {
        'Authorization': `Bearer ${authservice.getToken()}`,
        
      },
    });

    console.log("val == ",TokenizedReq)
    return next.handle(TokenizedReq)
  }

}
