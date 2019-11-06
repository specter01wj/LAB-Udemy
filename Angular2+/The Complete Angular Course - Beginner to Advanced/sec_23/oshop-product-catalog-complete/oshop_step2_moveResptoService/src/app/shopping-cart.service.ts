import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Product } from './models/product';
import 'rxjs/add/operator/take';

@Injectable()
export class ShoppingCartService {

  constructor(private db: AngularFireDatabase) { }

  private create() {
  	return this.db.list('/shopping-carts').push({
  		dateCreated: new Date().getTime()
  	});
  }

  private getCart(cardId: string) {
  	return this.db.object('/shopping-carts/' + cardId);
  }

/*  private async getOrCreateCart() {
  	let cardId = localStorage.getItem('cardId');
  	if(!cardId) {
  		let result = await this.create();
  		localStorage.setItem('cardId', result.key);
  		return this.getCart(result.key);
  	}
  	return this.getCart(cardId);
  }*/

  private async getOrCreateCartId() {
  	let cardId = localStorage.getItem('cardId');
  	if(cardId) {
  		return cardId;
  	}

	let result = await this.create();
	localStorage.setItem('cardId', result.key);
	return result.key;
  }

  async addToCart(product: Product) {
  	let cardId = await this.getOrCreateCartId();
  	let item$ = this.db.object('/shopping-carts/' + cardId + '/item/' + product.$key);
  	item$.take(1).subscribe(item => {
  		if(item.$exists()) {
  			item$.update({
  				quantity: item.quantity + 1
  			});
  		} else {
  			item$.set({
  				product: product, quantity: 1
  			});
  		}
  	});
  }

}
