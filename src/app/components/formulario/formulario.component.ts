import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  
  @Output() parametrosSeleccionados = new EventEmitter<any>();
  categoriaSeleccionada = 'general';
  paisSeleccioando = 'ar'

  categorias: any[]=[
    {value:'general',nombre:'General',},
    {value:'bussines',nombre:'Negocios',},
    {value:'entertainment',nombre:'Entretenimiento',},
    {value:'health',nombre:'Salud',},
    {value:'science',nombre:'Ciencia',},
    {value:'sports',nombre:'Deportes',},
    {value:'technology',nombre:'Tecnologia',},
 ]

 paises: any[]=[
  {value:'ar',nombre:'Argentina',},
  {value:'br',nombre:'Brasil',},
  {value:'fr',nombre:'Francia',},
  {value:'hu',nombre:'Hungria',},
  {value:'mx',nombre:'Mexico',},
  {value:'gb',nombre:'Reino Unido',},
]

buscarNoticia() {
  // console.log(this.categoriaSeleccionada);
  // console.log(this.paisSeleccioando);

  const PARAMETROS  = {
    categoria: this.categoriaSeleccionada,
    pais:this.paisSeleccioando
  }
  this.parametrosSeleccionados.emit(PARAMETROS)
}

}
