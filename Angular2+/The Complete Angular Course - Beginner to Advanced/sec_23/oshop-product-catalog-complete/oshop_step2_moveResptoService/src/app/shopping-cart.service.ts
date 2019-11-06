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

  private getOrCreateCart() {
  	let cardId = localStorage.getItem('cardId');
  	if(!cardId) {
  		this.create().then(result => {
  			localStorage.setItem('cardId', result.key);
  			return this.getCart(result.key);
  		});
  	} else {
  		return this.getCart(cardId);
  	}
  }

}
