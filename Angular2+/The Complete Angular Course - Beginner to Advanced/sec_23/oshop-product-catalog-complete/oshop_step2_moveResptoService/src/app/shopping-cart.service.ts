import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class ShoppingCartService {

  constructor(private db: AngularFireDatabase) { }

  private create() {
  	return this.db.list('/shopping-carts').push({
  		dateCreated: new Date().getTime()
  	});
  }

  private getCart(cardId: string) {
  	return this.db.object('/shopping-carts/', cardId);
  }

  private async getOrCreateCart() {
  	let cardId = localStorage.getItem('cardId');
  	if(!cardId) {
  		let result = await this.create();
  		localStorage.setItem('cardId', result.key);
  		return this.getCart(result.key);
  	}
  	return this.getCart(cardId);
  }

  async addToCart(product: Pruduct) {
  	let cart = await this.getOrCreateCart();
  }

}
