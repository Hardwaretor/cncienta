import { Component, OnInit, } from '@angular/core';
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


  user: User;
  cart: Product[] = [];

  constructor(

    private accountService: AccountService,
    private store: Store<{ items: []; cart: [] }>

) {


  this.user = this.accountService.userValue;
  store.pipe(select('shop')).subscribe(data => (this.cart = data.cart));

  }

 
  ngOnInit() {


  }
}

