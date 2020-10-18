import { Component, OnInit } from '@angular/core';
import { User } from '../_models';
import { AccountService } from '../_services';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  user: User;

  constructor(

    private accountService: AccountService) {

      this.user = this.accountService.userValue;

     }

  ngOnInit(): void {
  }

}
