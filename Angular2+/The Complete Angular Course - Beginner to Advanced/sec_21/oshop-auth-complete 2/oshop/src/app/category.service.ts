import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
// import { AngularFireDatabase } from '@angular/fire/database';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
import { FirebaseListObservable } from 'angularfire2/database';
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class CategoryService {

	// categories$: Observable<any[]>;

  constructor(private db: AngularFireDatabase) { 
  	// this.categories$ = this.db.object('/categories').snapshotChanges();
  }

  /*getCategories() {
 		// return this.observableCategories$;
 	return this.categories$;
  }*/

  getCategories() {
  	return this.db.list('/categories', {
  		query: {
  			orderByChild: 'name'
  		}
  	});
  	// return this.db.list('/categories', ref => ref.orderByChild('name')).snapshotChanges();
  }

}
