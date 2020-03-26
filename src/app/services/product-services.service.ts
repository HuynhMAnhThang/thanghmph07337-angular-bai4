import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Product } from '../_model/product';
@Injectable()
export class ProductServicesService {
api='https://5e7b25270e04630016332d52.mockapi.io/PruductMB'
  constructor(
    private http : HttpClient,
  ) { }

getProduts():Observable<Product[]>{
  return this.http.get<Product[]>(this.api)
}
getProduct(id):Observable<Product>{
  return this.http.get<Product>(`${this.api}/${id}`);
}

}