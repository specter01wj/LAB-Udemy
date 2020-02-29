import { Component, OnInit } from '@angular/core';

// import { HttpClient } from '@angular/common/http';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.less']
})
export class PostsComponent implements OnInit {
	posts: any;
	private url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private postService: PostService) {}
  // constructor(private http: HttpClient) {}
  /*constructor(private http: HttpClient) { 
  	http.get(this.url)
  		.subscribe(response => {
  			// console.log(response);
  			this.posts = response;
  		});
  }*/

  /*ngOnInit() {
  	this.http.get(this.url)
  		.subscribe(response => {
  			// console.log(response);
  			this.posts = response;
  		});
  }*/

  ngOnInit() {
  	this.postService.getPosts()
  		.subscribe(response => {
  			// console.log(response);
  			this.posts = response;
  		});
  }

  /*createPost(input: HTMLInputElement) {
  	let post = { title: input.value };
  	input.value = '';
  	this.http.post(this.url, JSON.stringify(post))
  		.subscribe(response => {
  			post['id'] = response.id;
  			this.posts.splice(0, 0, post);
  			// console.log(response);
  		});
  }*/

  createPost(input: HTMLInputElement) {
  	let post = { title: input.value };
  	input.value = '';

  	this.postService.createPost(post)
  		.subscribe(response => {
  			post['id'] = response.id;
  			this.posts.splice(0, 0, post);


  			
  			// console.log(response);
  		});
  }

  /*updatePost(post) {
  	this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }))
  		.subscribe(response => {
  			console.log(response);
  		});
  }*/

  updatePost(post) {
  	this.postService.updatePost(post)
  		.subscribe(response => {
  			console.log(response);
  		});
  }

  /*deletePost(post) {
  	this.http.delete(this.url + '/' + post.id)
  		.subscribe(response => {
  			let index = this.posts.indexOf(post);
  			this.posts.splice(index, 1);
  		});
  }*/

  deletePost(post) {
  	this.postService.deletePost(post)
  		.subscribe(response => {
  			let index = this.posts.indexOf(post);
  			this.posts.splice(index, 1);
  		});
  }

  

}
