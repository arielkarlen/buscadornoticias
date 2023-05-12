import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DolarService {

  constructor(private http: HttpClient) { }
  getDolar(): Observable<any> {
    const URL = 'https://api.bluelytics.com.ar/v2/latest'
    return this.http.get(URL)
  }
}
