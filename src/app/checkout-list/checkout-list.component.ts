import { Component, OnInit } from '@angular/core';
import { Cart } from '../_models';
import { AccountService } from '../_services';

@Component({
  selector: 'app-checkout-list',
  templateUrl: './checkout-list.component.html',
  styleUrls: ['./checkout-list.component.scss']
})
export class CheckoutListComponent implements OnInit {

  cart: Cart;
  loading = false;

  
  constructor(

    private accountService: AccountService,

  ) { 

    this.cart = this.accountService.cartValue;

  }

  ngOnInit(): void {

  }
  }

  

