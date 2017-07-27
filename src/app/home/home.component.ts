import { Component, OnInit } from '@angular/core';
import { ProductService } from "./product.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'app';
  public cart = [];
  public products = [];
  constructor(public productService:ProductService) { 
  }
  ngOnInit()
  {

    this.productService.getProducts().subscribe(responseProducts => this.products = responseProducts);
  }
  addtocart(name)
  {
      this.cart.push(name);
  }
}
