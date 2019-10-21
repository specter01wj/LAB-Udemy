import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  	/*this.route.paramMap
  		.subscribe(params => {
  			// console.log(params);
  			let id = +params.get('id');
  			console.log(id);
  		});*/
  		// console.log("Github profile, oninit!");
  		let id = this.route.snapshot.paramMap.get('id');
  		console.log(id);
  }

}
