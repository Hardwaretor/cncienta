import { Component, Input, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { AccountService } from '../_services';
import { Product } from '../_models'



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit {

  products = null;
  inCart = false;

  

  @Input() product: Product;


  addToCart(cart: string, ){

    var oldProducts = JSON.parse(localStorage.getItem('cart')) || [];
    var newProduct = {cart};
    oldProducts.push(newProduct);
    localStorage.setItem('cart', JSON.stringify(oldProducts));
    var counter = JSON.parse(localStorage.cart).length
    localStorage.setItem('counter', JSON.stringify(counter));

     }
    

  removeToCart(cart: string ){

  localStorage.removeItem('cart');
  this.inCart = false;

}

  constructor(private accountService: AccountService) { 

  }


  ngOnInit() {

    this.accountService.getAllproducts()
    .pipe(first())
    .subscribe(products => this.products = products);
  }


}