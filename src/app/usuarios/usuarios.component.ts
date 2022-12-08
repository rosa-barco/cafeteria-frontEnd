import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { IngredientesService } from '../service/ingredientes.service';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  listProductos: any[] = []

  constructor(private _userService: AuthService) { }

  form = {
    name :'',
    email: '',
    _id: ''
  }

  ngOnInit(): void {
    this.obtenerProductos()
  }

  selectIngrediente(data):void {
    this.form = {
      name :data.name,
      email: data.email,
      _id: data._id
    }
    console.log(this.form);
  }

  handleUpdate():void{
    this._userService.updateUser(this.form).subscribe(data => {
      console.log(data);
      this.obtenerProductos()

    }, 
    error => {
      console.log(error);
      
    })
  }

  obtenerProductos(){
    this._userService.getUsers().subscribe(data => {
      console.log(data);
      this.listProductos = data
      
    }, 
    error => {
      console.log(error);
      
    })
  }
}
