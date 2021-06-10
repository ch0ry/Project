import { Component, OnInit } from '@angular/core';


import {ProductsService} from "../../services/products.service";


@Component({
  selector: 'app-customers',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any = [];
  breakpoint: number;

  constructor(private productsService: ProductsService) {
    this.breakpoint = (window.innerWidth <= 1000) ? 1 : 3;
  }

  ngOnInit(): void {
    this.breakpoint = (window.innerWidth <= 1000) ? 1 : 3;
    this.productsService.getProducts().subscribe(
      res=> this.products = res,
      err => console.error(err)
    );

  }

  onResize(event: any) {
    this.breakpoint = (event.target.innerWidth <= 1000) ? 1 : 3;
  }

}
