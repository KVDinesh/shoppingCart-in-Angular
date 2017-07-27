import { Component, Input } from '@angular/core';
import { ProductService } from "../home/product.service";
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  
  @Input() public carts:any[]; 

}
