import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpResponse,
    HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import {NgxNotificationService} from "ngx-notification";


export class HttpErrorInterceptor implements HttpInterceptor {


    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request)
            .pipe(
                retry(1),
                catchError((error: HttpErrorResponse) => {
                    let errorMessage = '';
                    if (error.error instanceof ErrorEvent) {
                        // client-side error
                        errorMessage = `Error Client: ${error.error.message}`;
                    } else {
                        // server-side error
                        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
                    }
                    // this.ngxNotificationService.sendMessage('Nazalost nisu ucitani podaci nije dobar url...', 'danger', 'bottom-right');
                    window.alert(errorMessage);
                    return throwError(errorMessage);
                })
            )
    }
    // constructor(private ngxNotificationService: NgxNotificationService) {
    // }
}
