import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class PostService {
	  private url = 'http://jsonplaceholder.typicode.com/posts';

  	constructor(private http: HttpClient) {}

  	getPosts() {
  		return this.http.get(this.url);
  	}

	  createPost(post) {
  		return this.http.post(this.url, JSON.stringify(post));
  	}

	  updatePost(post) {
  		return this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }));
  	}

	  /*deletePost(post) {
  		return this.http.delete(this.url + '/' + post.id);
  	}*/

    deletePost(post) {
      return this.http.delete(this.url + '/' + post.id)
        .catch((error: Response) => {
          if(error.status === 404) {
            return Observable.throw(new NotFoundError());
          }
          return Observable.throw(new AppError(error));
        });
    }


}
