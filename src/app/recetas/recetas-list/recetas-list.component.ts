import { Component, OnInit } from '@angular/core';
import { IReceta } from '../recetas';

@Component({
  selector: 'app-recetas-list',
  templateUrl: './recetas-list.component.html',
  styleUrls: ['./recetas-list.component.css']
})
export class RecetasListComponent implements OnInit {

  listFilter:string='';
  catFilter:string='';
  nomFilter:string='';
  idFilter:string='';
  filtroN:string='';

  displaye:string='none';

  filtroId(nombre:string){
    this.filtroN = nombre;
    this.idFilter = this.filtroN;
    this.displaye = 'block';
  }

  ocultar(){
    this.displaye = 'none';
  }

  constructor() { }

  ngOnInit(): void {
  }

  recetas:IReceta[]=[
    {
      "recetaId":1,
      "Nombre":'Menta Helada Mocha',
      "Precio":118,
      "Tipo":'Frío',
      "Categoria":'Café',
      "Ingrediente1":'Espresso',
      "Cantidad1":20,
      "Ingrediente2":'Hielo',
      "Cantidad2":6,
      "Ingrediente3":'Salsa de Chocolate',
      "Cantidad3":200,
      "Ingrediente4":'Crema de Menta',
      "Cantidad4":4,
      "Ingrediente5":'Leche Condensada',
      "Cantidad5":10,
      "Ingrediente6":'Crema Batida',
      "Cantidad6":60,
      "Ingrediente7":'--',
      "Cantidad7":0,
      "Ingrediente8":'--',
      "Cantidad8":0,
      "ImagenUrl":'./assets/medios/Recetas/01.webp'
    },
    {
      "recetaId":2,
      "Nombre":'Nuez Moscada Latte',
      "Precio":114,
      "Tipo":'Caliente',
      "Categoria":'Café',
      "Ingrediente1":'Espresso',
      "Cantidad1":10,
      "Ingrediente2":'Miel',
      "Cantidad2":10,
      "Ingrediente3":'Leche',
      "Cantidad3":260,
      "Ingrediente4":'Pimienta de Jamaica',
      "Cantidad4":1,
      "Ingrediente5":'Nuez Moscada',
      "Cantidad5":1,
      "Ingrediente6":'Canela',
      "Cantidad6":1,
      "Ingrediente7":'--',
      "Cantidad7":0,
      "Ingrediente8":'--',
      "Cantidad8":0,
      "ImagenUrl":'./assets/medios/Recetas/02.webp'
    },/*
    {
      "recetaId":3,
      "Nombre":'Espumante Espresso con Menta',
      "Precio":77,
      "Tipo":'Frío',
      "Categoria":'Café',
      "Ingrediente1":'Espresso',
      "Cantidad1":10,
      "Ingrediente2":'Azúcar',
      "Cantidad2":16,
      "Ingrediente3":'Crema de Menta',
      "Cantidad3":3,
      "Ingrediente4":'Agua con Gas',
      "Cantidad4":120,
      "Ingrediente5":'Hielo',
      "Cantidad5":2,
      "Ingrediente6":'--',
      "Cantidad6":0,
      "Ingrediente7":'--',
      "Cantidad7":0,
      "Ingrediente8":'--',
      "Cantidad8":0,
      "ImagenUrl":'./assets/medios/Recetas/06.webp'
    },*/
    {
      "recetaId":4,
      "Nombre":'Café Americano',
      "Precio":60,
      "Tipo":'Caliente',
      "Categoria":'Café',
      "Ingrediente1":'Espresso',
      "Cantidad1":20,
      "Ingrediente2":'Agua',
      "Cantidad2":360,
      "Ingrediente3":'--',
      "Cantidad3":0,
      "Ingrediente4":'--',
      "Cantidad4":0,
      "Ingrediente5":'--',
      "Cantidad5":0,
      "Ingrediente6":'--',
      "Cantidad6":0,
      "Ingrediente7":'--',
      "Cantidad7":0,
      "Ingrediente8":'--',
      "Cantidad8":0,
      "ImagenUrl":'./assets/medios/Recetas/07.webp'
    },
    {
      "recetaId":5,
      "Nombre":'Cappuccino',
      "Precio":90,
      "Tipo":'Caliente',
      "Categoria":'Café',
      "Ingrediente1":'Espresso',
      "Cantidad1":10,
      "Ingrediente2":'Leche',
      "Cantidad2":240,
      "Ingrediente3":'Canela',
      "Cantidad3":1,
      "Ingrediente4":'--',
      "Cantidad4":0,
      "Ingrediente5":'--',
      "Cantidad5":0,
      "Ingrediente6":'--',
      "Cantidad6":0,
      "Ingrediente7":'--',
      "Cantidad7":0,
      "Ingrediente8":'--',
      "Cantidad8":0,
      "ImagenUrl":'./assets/medios/Recetas/11.webp'
    },
    {
      "recetaId":6,
      "Nombre":'Caffé Mocha',
      "Precio":107,
      "Tipo":'Caliente',
      "Categoria":'Café',
      "Ingrediente1":'Espresso',
      "Cantidad1":10,
      "Ingrediente2":'Leche',
      "Cantidad2":240,
      "Ingrediente3":'Salsa de Chocolate',
      "Cantidad3":20,
      "Ingrediente4":'Crema Batida',
      "Cantidad4":20,
      "Ingrediente5":'--',
      "Cantidad5":0,
      "Ingrediente6":'--',
      "Cantidad6":0,
      "Ingrediente7":'--',
      "Cantidad7":0,
      "Ingrediente8":'--',
      "Cantidad8":0,
      "ImagenUrl":'./assets/medios/Recetas/12.webp'
    },
    {
      "recetaId":7,
      "Nombre":'Infusión de Té Verde a la Cúrcuma',
      "Precio":74,
      "Tipo":'Frío',
      "Categoria":'Té',
      "Ingrediente1":'Té Verde',
      "Cantidad1":20,
      "Ingrediente2":'Frambuesas',
      "Cantidad2":20,
      "Ingrediente3":'Cúrcuma',
      "Cantidad3":5,
      "Ingrediente4":'Agua',
      "Cantidad4":500,
      "Ingrediente5":'Hielo',
      "Cantidad5":2,
      "Ingrediente6":'Azúcar',
      "Cantidad6":8,
      "Ingrediente7":'--',
      "Cantidad7":0,
      "Ingrediente8":'--',
      "Cantidad8":0,
      "ImagenUrl":'./assets/medios/Recetas/13.png'
    },
    {
      "recetaId":8,
      "Nombre":'Infusión de Manzana Canela',
      "Precio":76,
      "Tipo":'Caliente',
      "Categoria":'Té',
      "Ingrediente1":'Miel',
      "Cantidad1":10,
      "Ingrediente2":'Té de Manzana',
      "Cantidad2":20,
      "Ingrediente3":'Agua',
      "Cantidad3":500,
      "Ingrediente4":'Canela',
      "Cantidad4":4,
      "Ingrediente5":'--',
      "Cantidad5":0,
      "Ingrediente6":'--',
      "Cantidad6":0,
      "Ingrediente7":'--',
      "Cantidad7":0,
      "Ingrediente8":'--',
      "Cantidad8":0,
      "ImagenUrl":'./assets/medios/Recetas/14.png'
    },
    {
      "recetaId":9,
      "Nombre":'Té Helado de limón y jengibre',
      "Precio":75,
      "Tipo":'Frío',
      "Categoria":'Té',
      "Ingrediente1":'Té Negro',
      "Cantidad1":20,
      "Ingrediente2":'Té de Limón',
      "Cantidad2":20,
      "Ingrediente3":'Azúcar',
      "Cantidad3":8,
      "Ingrediente4":'Jungibre Molido',
      "Cantidad4":1,
      "Ingrediente5":'Hielo',
      "Cantidad5":3,
      "Ingrediente6":'--',
      "Cantidad6":0,
      "Ingrediente7":'--',
      "Cantidad7":0,
      "Ingrediente8":'--',
      "Cantidad8":0,
      "ImagenUrl":'./assets/medios/Recetas/15.png'
    }
  ]

}
