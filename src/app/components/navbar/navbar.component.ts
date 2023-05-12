import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  public SiteTitle:string = "Portal de noticias"
  public logo:string = "assets/logo.svg"

@Input() titulo:string;
@Input() valorDolar:any

constructor() {
  this.titulo=""
}
}
