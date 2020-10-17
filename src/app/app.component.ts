﻿import { Component, OnInit  } from '@angular/core';
import { User } from './_models';
import { AuthenticationService } from './_services';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{

  user: User;
  title = 'angular-text-search-highlight';
  searchText = '';
  characters = [
    'Table',
    'Lamp',
    'Hand',
    'Guitar',
    'Chair',
    'Machine',
    '3DPrinter',
    'Material'
  ]

  constructor(
    
    private authenticationService: AuthenticationService)
    
    {
      this.authenticationService.user.subscribe(x => this.user = x);
  }

  

  logout() {
      this.authenticationService.logout();
  }

  ngOnInit(): void {
  } 

}

