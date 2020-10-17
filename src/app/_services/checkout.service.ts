import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Cart } from '../_models';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  constructor(private http: HttpClient) {}

  cart = null;

  getAllcart() {
        
    let cart = localStorage.getItem('cart'); 
    return  this.cart ;
    
}
}