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
    const URL = 'https://newsdata.io/api/1/news?apikey=pub_220571b0b026b324b46019e83fd4ede10184f&country='+codeCountry+''
    return this.http.get(URL)
  }
}