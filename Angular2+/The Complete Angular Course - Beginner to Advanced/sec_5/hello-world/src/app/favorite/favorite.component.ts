import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.less']
  // inputs: ['isFav']
})
export class FavoriteComponent implements OnInit {
	@Input('is-fav') isFav: boolean;
	@Output() change = new EventEmitter();

	

	toggleFav() {
		this.isFav = !this.isFav;
		this.change.emit();
	}

  constructor() { }

  ngOnInit() {
  }

}
