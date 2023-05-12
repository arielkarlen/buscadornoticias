import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }


  getNoticias(parametros: any): Observable<any> {

   
    const URL = 'https://newsdata.io/api/1/news?apikey=pub_220571b0b026b324b46019e83fd4ede10184f&country='+parametros.pais+'&category='+parametros.categoria+''
    return this.http.get(URL)
  }
}
