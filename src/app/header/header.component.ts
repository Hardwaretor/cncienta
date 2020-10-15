import { Component, OnInit, Input } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Product } from '../product/product.component';
import { User } from '../_models';
import { AccountService } from '../_services';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  cart: Product[] = [];
  
  constructor(

    private store: Store<{ items: []; cart: [] }>) {
    store.pipe(select('items')).subscribe(data => (this.cart = data));
  }
 

  ngOnInit() {}
}
