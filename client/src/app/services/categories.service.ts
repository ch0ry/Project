import { Injectable } from '@angular/core';
import {Category} from "../models/Category";
import {HttpClient} from "@angular/common/http";
import {Product} from "../models/Product";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) {}

  API_URI = "http://localhost:3000/api/categories";


  getCategories(){
    return this.http.get(`${this.API_URI}`);
  }

  getOneCategory(id: string){
    return this.http.get(`${this.API_URI}/${id}`);
  }

  addCategory(product: Product){
    return this.http.post(`${this.API_URI}`, product)
  }

  updateCategories(product: Product){
    return this.http.put(`${this.API_URI}`, product)
  }

  deleteCategory(id: string){
    return this.http.delete(`${this.API_URI}/${id}`)
  }


}
