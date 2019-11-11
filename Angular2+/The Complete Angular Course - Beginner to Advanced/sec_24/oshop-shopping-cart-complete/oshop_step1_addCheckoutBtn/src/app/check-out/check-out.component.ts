import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './../shopping-cart.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
	shipping = {}; 
	
  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
  }


  
  placeOrder() {
    // console.log(this.shipping);
    let order = {
    	datePlaced: new Date().getTime(),
    	shipping: this.shipping,
    }
  }    

}
