import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingCart } from './../models/shopping-cart';
import { ShoppingCartService } from './../shopping-cart.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit, OnDestroy {
	shipping = {}; 
	cart: ShoppingCart;
	subscription: Subscription;
	
  constructor(private shoppingCartService: ShoppingCartService) { }

  async ngOnInit() {
  	let cart$ = await this.shoppingCartService.getCart();
  	this.subscription = cart$.subscribe(cart => this.cart = cart);
  }

  ngOnDestroy() {
  	this.subscription.unsubscribe();
  }

  placeOrder() {
    // console.log(this.shipping);
    let order = {
    	datePlaced: new Date().getTime(),
    	shipping: this.shipping,
    	items: this.cart.items.map(i => {
    		return {
    			product: {
    				title: i.title,
    				imageUrl: i.imageUrl,
    				price: i.price
    			},
    			quantity: i.quantity,
    			totalPrice: i.totalPrice
    		}
    	})
    }
  }    

}
