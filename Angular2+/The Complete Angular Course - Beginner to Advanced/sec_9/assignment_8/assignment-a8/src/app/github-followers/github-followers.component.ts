import { Component, OnInit } from '@angular/core';

import { GithubFollowersService } from './../services/github-followers.service';
import { DataService } from '../services/data.service';

import { Followers } from "../models/followers";

@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.less']
})
export class GithubFollowersComponent implements OnInit {
  followers: Followers[];

  constructor(private service: GithubFollowersService,
  		private dataService: DataService) { }

  ngOnInit() {
  	this.dataService.getAll()
      .subscribe(
      	(data: Followers[]) => this.followers = data
      );
  }

}
