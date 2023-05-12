import { Component, OnInit } from '@angular/core';
import { NoticiasService } from './services/noticias.service';
import { UltimasNoticiasService } from './services/ultimasnoticias.service';
import { DolarService } from './services/dolar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{
  listaDeNoticias: any[]=[] ;
  loading = false;
  ultimasNoticias: any[]=[];
  ultimasNoticiasInternacional: any[]=[]
  valorDolar: any[]=[]
  titleLastArgentina="Argentina"
  titleLastInternational="Internacionales"

  constructor(private _api: NoticiasService, private _apiLast: UltimasNoticiasService, private _apiDolar: DolarService) 
  {

  }



ngOnInit(): void {
  const parametrosIniciales  = {
    categoria: "general",
    pais:"ar"
  }
  
  this.buscarNoticias(parametrosIniciales)
  this.listarUltimasNoticias("ar")
  this.listarUltimasNoticiasInternacionals("us")
  this.listValorDolar()
}


 buscarNoticias(parametro: any) 
 {
 this.loading=true

  this._api.getNoticias(parametro).subscribe(result=>
    {
    this.listaDeNoticias=result.articles;
    this.loading=false
    })
    
  
 }

 listarUltimasNoticias(codeCountry:any) {
  this._apiLast.getUltimasNoticias(codeCountry).subscribe(result=>
    {
    this.ultimasNoticias=result.articles;
  
    })
 }

 listarUltimasNoticiasInternacionals(codeCountry:any) {
  this._apiLast.getUltimasNoticias(codeCountry).subscribe(result=>
    {
    this.ultimasNoticiasInternacional=result.articles;
  
    })
 }

 listValorDolar() {
  this._apiDolar.getDolar().subscribe(result=>
    {
    this.valorDolar=result;
 
    })
 }

}
