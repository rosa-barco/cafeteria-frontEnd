import { Pipe, PipeTransform } from '@angular/core';
import { IInicio } from './inicio';

@Pipe({
  name: 'recetasFiltro'
})
export class RecetasFiltroPipe implements PipeTransform {

  transform(value: IInicio[], args:string): IInicio[] {
    let filter:string=args ? args.toLocaleLowerCase():'';

    return filter ? value.filter((receta:IInicio)=>
      receta.Tipo.toLocaleLowerCase().indexOf(filter)!= -1
    ):value;
  }

}

@Pipe({
    name: 'categoriasFiltro'
  })
  export class CatsFiltroPipe implements PipeTransform {
  
    transform(value: IInicio[], args:string): IInicio[] {
      let filter:string=args ? args.toLocaleLowerCase():'';
  
      return filter ? value.filter((receta:IInicio)=>
        receta.Categoria.toLocaleLowerCase().indexOf(filter)!= -1
      ):value;
    }
  
  }

  @Pipe({
    name: 'nombreFiltro'
  })
  export class NombreFiltroPipe implements PipeTransform {
  
    transform(value: IInicio[], args:string): IInicio[] {
      let filter:string=args ? args.toLocaleLowerCase():'';
  
      return filter ? value.filter((receta:IInicio)=>
        receta.nombre.toLocaleLowerCase().indexOf(filter)!= -1
      ):value;
    }
  
  }