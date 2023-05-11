import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 buscarNoticias(parametro: any) 
 {
console.log(parametro)

 }
}
