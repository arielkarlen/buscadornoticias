import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UltimasNoticiasService {

noticiasQty:number = 3;

  constructor(private http: HttpClient) { }


  getUltimasNoticias(parametros:any): Observable<any> {
    const URL = 'https://newsapi.org/v2/top-headlines?country='+parametros.pais+'&pageSize='+this.noticiasQty+'&apiKey=abd0d46a1f6745df82e8d514ad049665'
    return this.http.get(URL)
  }
}