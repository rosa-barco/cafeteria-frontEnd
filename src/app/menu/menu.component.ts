import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  display:string="none";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  menu=this.router.url;

  aparece(){
      this.display="block";
  }

  desaparece(){
    this.display="none";
  }

  cerrar(){
      console.log('hola');
      localStorage.removeItem('user')
      this.router.navigate(['/'])
  }
}
