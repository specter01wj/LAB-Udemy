import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
// import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoryService {

	categories$: Observable<any[]>;

  constructor(private db: AngularFireDatabase) { 
  	this.categories$ = this.db.object('/categories').snapshotChanges();
  }

  getCategories() {
 		// return this.observableCategories$;
 	return this.categories$;
  }

  /*public getCategories() {
  	return this.db.list('/categories', {
  		query: {
  			orderByChild: 'name'
  		}
  	});
  	return this.db.list('/categories', ref => ref.orderByChild('name')).snapshotChanges();
  }
*/
}
