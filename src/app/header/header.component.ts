import { Component, OnInit, } from '@angular/core';
import { Counter } from '../_models';
import { AccountService } from '../_services';
import { User } from '../_models';

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

) {

  
  this.counter = this.accountService.counterValue;
  this.user = this.accountService.userValue;

  }
 
  ngOnInit() {


  }
}

