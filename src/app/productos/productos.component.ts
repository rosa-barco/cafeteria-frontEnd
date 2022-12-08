import { Component, OnInit } from '@angular/core';
import { IngredientesService } from '../service/ingredientes.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  listProductos: any[] = []

  constructor(private _productoService: IngredientesService) { }

  form = {
    nombre :'',
    unidadTotal :0,
    porcion: 0 ,
    precio: 0,
    id: 0
  }



  ngOnInit(): void {
    this.obtenerProductos()
  }

  selectIngrediente(data):void {
    this.form = {
      nombre :data.nombre,
      unidadTotal :data.unidadTotal,
      porcion: data.porcion,
      precio: data.precio,
      id: data.id
    }
    console.log(this.form);
  }

  handleUpdate():void{
    this._productoService.updateIngrediente(this.form).subscribe(data => {
      console.log(data);
      this.obtenerProductos()

    }, 
    error => {
      console.log(error);
      
    })
  }

  

  obtenerProductos(){
    this._productoService.getIngredientes().subscribe(data => {
      console.log(data);
      this.listProductos = data
      
    }, 
    error => {
      console.log(error);
      
    })
  }

}
