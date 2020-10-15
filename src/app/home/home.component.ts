import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { GetItems } from '../store/actions';
import { Product } from '../product/product.component';
import { first } from 'rxjs/operators';
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
  products: Product[];

  constructor(
    private productService: ProductsService,
    private store: Store<{ items: Product[]; cart: [] }>) {
    store.pipe(select('items')).subscribe(data => (this.items = data));
  }

  items: Product[] = [];

  ngOnInit() {
    this.store.dispatch(new GetItems());
    this.loading = true;
    this.productService.getAll().pipe(first()).subscribe(products => {
        this.loading = false;
        this.products = products;
    });
  }
}
