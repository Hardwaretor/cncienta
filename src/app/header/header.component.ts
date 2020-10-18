import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, Input } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Counter } from '../_models';
import { AccountService } from '../_services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {


  counter: Counter;

  @Input() Counter: Observable<any>;

  constructor(

    private accountService: AccountService,


) {

  
  this.counter = this.accountService.counterValue;

  }
 
  ngOnInit() {


  }
}

