import { Component } from '@angular/core';
import { NoticiasService } from './services/noticias.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {


  constructor(private _api: NoticiasService) 
  {

  }
 buscarNoticias(parametro: any) 
 {
 
  this._api.getNoticias(parametro).subscribe(result=>
    {console.log(result)})
 }
}
