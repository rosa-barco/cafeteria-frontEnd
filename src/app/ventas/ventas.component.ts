import { Component, OnInit } from '@angular/core';
import { VentasService } from '../service/ventas.service';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {
  listaVentas: any[] = []

  displayVer:string="none";
  
  constructor(private _ventasService: VentasService) { }

  ngOnInit(): void {
    this.obtenerVentas()
  }

  obtenerVentas(){
    this._ventasService.getVentas().subscribe(data => {
      console.log(data);
      this.listaVentas = data
      
    }, 
    error => {
      console.log(error);
      
    })
  }



  verVenta(){
    this.displayVer="block";
  }

}
