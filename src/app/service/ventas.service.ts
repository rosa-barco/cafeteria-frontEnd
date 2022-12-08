import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  Auth_Server: string = 'http://localhost:3001/api/venta'
  authSubject = new BehaviorSubject(false);
  
  constructor(private httpClient: HttpClient) { }

   getVentas() : Observable<any>{
    return this.httpClient.get(this.Auth_Server)
  }

   postVenta(list):Observable<any>{
    return this.httpClient.post(this.Auth_Server, list)
   }

}
