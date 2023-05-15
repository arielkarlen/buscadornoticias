import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ultimas-noticias',
  templateUrl: './ultimas-noticias.component.html',
  styleUrls: ['./ultimas-noticias.component.css']
})
export class UltimasNoticiasComponent {
  @Input() title:any
  @Input() ultimasNoticias: any;
  
}
