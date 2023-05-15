import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { GlobalComponent } from '../components/global-component/global-component.component';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }


  getNoticias(parametros: any): Observable<any> {

   
    
    const URL = ''+GlobalComponent.apiUrl+'?apikey='+GlobalComponent.apiKey+'&country='+parametros.pais+'&category='+parametros.categoria+''
    return this.http.get(URL)
  }
}
