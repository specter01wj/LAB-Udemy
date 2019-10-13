import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'hello- James world';

  	post = {
		title: "Accenture",
		isFav: false
	}

	onFavChanged() {
		console.log("Fav Changed!");
	}
}
