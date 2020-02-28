import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.less']
})
export class PostsComponent implements OnInit {
	posts: any;
	private url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { 
  	http.get(this.url)
  		.subscribe(response => {
  			// console.log(response);
  			this.posts = response;
  		});
  }

  ngOnInit() {
  }

  createPost(input: HTMLInputElement) {
  	let post = { title: input.value };
  	this.http.post(this.url, JSON.stringify(post))
  		.subscribe(response => {
  			console.log(response);
  		});
  }

}
