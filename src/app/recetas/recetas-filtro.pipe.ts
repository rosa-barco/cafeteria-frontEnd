import { Pipe, PipeTransform } from '@angular/core';
import { IReceta } from './recetas';

@Pipe({
  name: 'recetaFiltro'
})
export class RecetaFiltroPipe implements PipeTransform {

  transform(value: any[], args:string): any[] {
    let filter:string=args ? args.toLocaleLowerCase():'';

    return filter ? value.filter((receta:any)=>
      receta.Tipo.toLocaleLowerCase().indexOf(filter)!= -1
    ):value;
  }

}

@Pipe({
    name: 'categoriaFiltro'
  })
  export class CatFiltroPipe implements PipeTransform {
  
    transform(value: IReceta[], args:string): IReceta[] {
      let filter:string=args ? args.toLocaleLowerCase():'';
  
      return filter ? value.filter((receta:IReceta)=>
        receta.Categoria.toLocaleLowerCase().indexOf(filter)!= -1
      ):value;
    }
  
  }

  @Pipe({
    name: 'idFiltro'
  })
  export class IdFiltroPipe implements PipeTransform {
  
    transform(value: IReceta[], args:string): IReceta[] {
      let filter:string=args ? args.toLocaleLowerCase():'';
  
      return filter ? value.filter((receta:IReceta)=>
        receta.Nombre.toLocaleLowerCase().indexOf(filter)!= -1
      ):value;
    }
  
  }

  @Pipe({
    name: 'nombresFiltro'
  })
  export class NombresFiltroPipe implements PipeTransform {
  
    transform(value: IReceta[], args:string): IReceta[] {
      let filter:string=args ? args.toLocaleLowerCase():'';
  
      return filter ? value.filter((receta:IReceta)=>
        receta.Nombre.toLocaleLowerCase().indexOf(filter)!= -1
      ):value;
    }
  
  }