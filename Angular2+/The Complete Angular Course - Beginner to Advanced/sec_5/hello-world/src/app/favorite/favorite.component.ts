import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.less']
})
export class FavoriteComponent implements OnInit {
	@Input() isFav: boolean;



	toggleFav() {
		this.isFav = !this.isFav;
	}

  constructor() { }

  ngOnInit() {
  }

}
