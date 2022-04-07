

import { Observable } from 'rxjs';

import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService implements HttpInterceptor {

  //@ts-ignore
  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const api_key = '123456';
    const authorization = "544D7V87DF8.7DF6SD7F67SD68F7.8DS7F86DS7DSF"
    return next.handle(httpRequest.clone({ setHeaders: {
      api_key,
      authorization
    } }));
  }
}
