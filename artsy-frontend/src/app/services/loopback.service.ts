import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoopbackService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public ping(): Observable<any> {
    const url = `${environment.domain}/ping`;
    return this.httpClient.get(url);
  }
}
