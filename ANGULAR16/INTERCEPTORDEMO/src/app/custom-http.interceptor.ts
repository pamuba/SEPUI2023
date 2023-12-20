import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http'
import { retry, Observable, catchError, throwError ,finalize} from 'rxjs';

@Injectable()
export class CustomInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token  = '12121342-sdfsf-42424-sfdsd';
        const reqWithHeader = req.clone({
            setHeaders:{
                Authorization: `Bearer ${token}`
            }
        });
        //return next.handle(reqWithHeader);
        return next.handle(req)
                    .pipe(
                        //retry on falilure
                        retry(2),
                        catchError((error:HttpResponse<any>) => {
                            alert(`HTTP Error:${req.url}`)
                            return throwError(error)
                        }),
                        finalize(()=>{
                            console.log(`*****${req.method} ${req.urlWithParams}`);
                        })
                    );
    }
}
