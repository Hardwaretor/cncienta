import { Component, OnInit, } from '@angular/core';
import { Counter } from '../_models';
import { AccountService } from '../_services';
import { User } from '../_models';
import { select, Store } from '@ngrx/store';
import { Product } from '../_models/product';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {


  counter: Counter;
  user: User;

  constructor(

    private accountService: AccountService,
    private store: Store<{ items: []; cart: [] }>

) {

  
  this.counter = this.accountService.counterValue;
  this.user = this.accountService.userValue;
  store.pipe(select('shop')).subscribe(data => (this.cart = data.cart));

  }

  cart: Product[] = [];
 
  ngOnInit() {


  }
}

