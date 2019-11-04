import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../product.service';
import { CategoryService } from './../category.service';
import { Product } from './../models/product';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  // products$;
	products: Product[] = [];
  filteredProducts: Product[] = [];
	categories$;
  categoryBtn: string;

  constructor(
    route: ActivatedRoute,
    productService: ProductService,
  	categoryService: CategoryService) { 

    // this.products$ = productService.getAll();
  	productService.getAll().switchMap(products => {
      this.products = products;
      return route.queryParamMap;
    })
    .subscribe(params => {
      this.categoryBtn = params.get('category');

      this.filteredProducts = (this.categoryBtn) ? 
        this.products.filter(p => p.category === this.categoryBtn) :
        this.products;
    });

  	this.categories$ = categoryService.getCategories();

    /*route.queryParamMap.subscribe(params => {
      this.categoryBtn = params.get('category');

      this.filteredProducts = (this.categoryBtn) ? 
        this.products.filter(p => p.category === this.categoryBtn) :
        this.products;
    });*/
  }

  ngOnInit() {
  }

}
