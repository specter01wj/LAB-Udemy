import { AppUser } from './../models/app-user';
import { AuthService } from './../auth.service';
import { ShoppingCartService } from './../shopping-cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
  appUser: AppUser;

  constructor(private auth: AuthService,
    private shoppingCartService: ShoppingCartService) { 
    
  }

  async ngOnInit() {
    auth.appUser$.subscribe(appUser => this.appUser = appUser);
    let cart$ = await this.shoppingCartService.getCart();
    cart$.subscribe(cart => {
      cart.items
    });
  }

  logout() {
    this.auth.logout();
  }

}
