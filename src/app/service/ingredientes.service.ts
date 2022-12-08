import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IngredientesService {
  Auth_Server: string = 'http://localhost:3001/api/ingredients'
  authSubject = new BehaviorSubject(false);
  
  constructor(private httpClient: HttpClient) { }

  getIngredientes() : Observable<any>{
    return this.httpClient.get(this.Auth_Server)
  }

  updateIngrediente(ingre): Observable<any>{
    return this.httpClient.put(this.Auth_Server, ingre)
  }

}
