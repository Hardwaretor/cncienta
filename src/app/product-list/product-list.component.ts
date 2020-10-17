import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { AccountService } from '../_services';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit {

  products = null;
  

  addToCart(item: string ){

    var oldProducts = JSON.parse(localStorage.getItem('cart')) || [];

    var newProduct = {
        item,
};

oldProducts.push(newProduct);

localStorage.setItem('cart', JSON.stringify(oldProducts));
}

  constructor(private accountService: AccountService) { 

  }


  ngOnInit() {

    this.accountService.getAllproducts()
    .pipe(first())
    .subscribe(products => this.products = products);
  }


}