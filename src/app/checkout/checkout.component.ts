import { Component, OnInit } from '@angular/core';
import { CheckoutService } from '../_services';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  loading = false;

  constructor(

    private productService: CheckoutService,


  ) { }

  ngOnInit() {
  }

}
