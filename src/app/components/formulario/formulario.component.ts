import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  
  @Output() parametrosSeleccionados = new EventEmitter<any>();
  categoriaSeleccionada = 'politics';
  paisSeleccioando = 'ar'

  categorias: any[]=[
    {value:'politics',nombre:'Politica',},
    {value:'bussines',nombre:'Negocios',},
    {value:'entertainment',nombre:'Entretenimiento',},
    {value:'health',nombre:'Salud',},
    {value:'science',nombre:'Ciencia',},
    {value:'sports',nombre:'Deportes',},
    {value:'technology',nombre:'Tecnologia',},
 ]

 paises: any[]=[
  {value:'ar',nombre:'Argentina',},
  {value:'us',nombre:'Internacional',},
  
]

buscarNoticia() {


  const PARAMETROS  = {
    categoria: this.categoriaSeleccionada,
    pais:this.paisSeleccioando,
   
  }
  this.parametrosSeleccionados.emit(PARAMETROS)
}

}
