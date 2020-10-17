import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-checkout-list',
  templateUrl: './checkout-list.component.html',
  styleUrls: ['./checkout-list.component.scss']
})
export class CheckoutListComponent implements OnInit {

  carts = null;
  

  constructor(

    private accountService: AccountService

  ) { 


  }

  ngOnInit(): void {

    this.accountService.getAllcart()
    .pipe(first())
    .subscribe(carts => this.carts = carts);
  }
  }

  

