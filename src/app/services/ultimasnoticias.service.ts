import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UltimasNoticiasService {

noticiasQty:number = 3;

  constructor(private http: HttpClient) { }


  getUltimasNoticias(codeCountry:any): Observable<any> {
    const URL = 'https://newsapi.org/v2/top-headlines?country='+codeCountry+'&pageSize='+this.noticiasQty+'&apiKey=292b4800b7e648ff9a5146e529839d14'
    return this.http.get(URL)
  }
}