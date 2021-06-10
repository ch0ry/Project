import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../models/Product";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  API_URI = "http://localhost:3000/api/products";

  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get(`${this.API_URI}`);
  }

  getOneProduct(id: string){
    return this.http.get(`${this.API_URI}/${id}`);
  }

  addProduct(product: Product){
    return this.http.post(`${this.API_URI}`, product)
  }

  updateProduct(product: Product){
    return this.http.put(`${this.API_URI}`, product)
  }

  deleteProduct(id: string){
    return this.http.delete(`${this.API_URI}/${id}`)
  }


}
