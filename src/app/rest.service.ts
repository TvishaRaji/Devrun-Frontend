import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from './users'; 
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http:HttpClient) {}
   
    
    getUsers(){
    return this.http.get<Users[]>("http://localhost:3000/Users");
    
   }

   topUsers(){
    return this.http.get<Users[]>("http://localhost:3000/Users?_limit=20")
   }


   searchProduct(query: string) {
    return this.http.get<Users[]>(
      `http://localhost:3000/Users?q=${query}`
    );
    }


    getProduct(id:string){
      return this.http.get<Users[]>(`http://localhost:3000/Users?Key=${id}`)
    }

    getProductDetails(id: string): Observable<Users[]> {
      return this.http.get<Users[]>(`http://localhost:3000/Users?Key=${id}`);
    }
  
}
