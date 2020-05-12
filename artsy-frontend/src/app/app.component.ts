import { Component } from '@angular/core';
import { LoopbackService } from './services/loopback.service';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private loopBackService: LoopbackService
  ) {
    this.loopBackService.ping().pipe(
      tap(x => console.log(x)),
      catchError(x => of(x))
    ).subscribe();
  }
}
