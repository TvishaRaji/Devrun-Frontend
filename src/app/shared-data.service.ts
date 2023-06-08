import { Injectable } from '@angular/core';
import { Users } from './users'; 
import { CategorysearchComponent } from './categorysearch/categorysearch.component';


@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private productDetails: Users[] = [];
  private result: Users[] = [];

  setProductDetails(details:Users[]):void{
    this.productDetails = details;
  }

  getProductDetails(): Users[] {
    return this.productDetails;
  }

}


// getProductDetails(id: string): Observable<Users[]> {
//   return this.http.get<Users[]>(`http://localhost:3000/Users?Key=${id}`);
// }