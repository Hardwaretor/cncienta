import { Component, OnInit, Input } from '@angular/core';
import { Counter } from '../_models';
import { AccountService } from '../_services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  counter: Counter;
  
  constructor(

    private accountService: AccountService

) {

  this.counter = this.accountService.counterValue;

  }
 
  ngOnInit() {}
}
