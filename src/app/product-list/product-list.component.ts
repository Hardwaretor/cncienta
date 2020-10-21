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

  @Input() product: Product;


  addToCart(cart: string, ){

    var oldProducts = JSON.parse(localStorage.getItem('cart')) || [];
    var newProduct = {cart};
    oldProducts.push(newProduct);
    localStorage.setItem('cart', JSON.stringify(oldProducts));

    var counter = JSON.parse(localStorage.cart).length
    localStorage.counter = JSON.stringify(counter)

     }
    

  removeToCart(){

    const cart = JSON.parse(localStorage.cart ?? "[]")
    localStorage.cart = JSON.stringify(cart.slice(0, -1))

    const counter = JSON.parse(localStorage.counter ?? "[]")
    localStorage.counter = JSON.stringify(counter-1)
    
}

  constructor(private accountService: AccountService) { 

  }


  ngOnInit() {

    this.accountService.getAllproducts()
    .pipe(first())
    .subscribe(products => this.products = products);
  }


}