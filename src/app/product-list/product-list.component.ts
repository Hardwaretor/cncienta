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
  

  addToCart(name: string,image:string, price:number ){

    var oldProducts = JSON.parse(localStorage.getItem('cart')) || [];

    var newProduct = {
        'product-name': name,
        'product-image': image,
        'product-price': price
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