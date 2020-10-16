import { Component, OnInit } from '@angular/core';
import { User } from '../_models';
import { ProductsService } from '../_services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loading = false;
  users: User[];

  constructor(
    private productService: ProductsService,
    ) {
  }

  ngOnInit() {

  }
}
