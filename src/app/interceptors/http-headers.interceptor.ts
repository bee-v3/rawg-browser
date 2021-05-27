import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let r = request.clone({
      setHeaders: {
        'x-rapidapi-key': `${environment.XAPI_KEY}`,
        'x-rapidapi-host': `${environment.API_HOST}`,
        'User-Agent': `${environment.APP_NAME}`,
      },
      setParams: {
        key: `${environment.API_KEY}`,
      },
    });
    return next.handle(r);
  }
}
