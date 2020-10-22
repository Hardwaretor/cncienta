import { Component, Input, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { AccountService } from '../_services';
import { Product } from '../_models'
import { Store } from '@ngrx/store';
import { AddToCart, RemoveFromCart } from '../store/actions';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit {

  constructor(
    
    private accountService: AccountService,
    private store: Store<{ items: []; cart: [] }>
    ) {}

  products = null;
  inCart = false;

  @Input() product: Product;


  addToCart(item: Product) {
    this.store.dispatch(new AddToCart(item));
    this.inCart = true;
  }

  removeFromCart(item: Product) {
    this.store.dispatch(new RemoveFromCart(item));
    this.inCart = false;
  }


  ngOnInit() {

    this.accountService.getAllproducts()
    .pipe(first())
    .subscribe(products => this.products = products);
  }


}