import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map,tap } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { User } from '../_models';
import { Product } from '../_models';
import { Machine } from '../_models';
import { Device } from '../_models';
import { Cam } from '../_models';
import { Cart } from '../_models';

@Injectable({ providedIn: 'root' })
export class AccountService {

    private userSubject: BehaviorSubject<User>;
    public user: Observable<User>;

    private productSubject: BehaviorSubject<Product>;
    public product: Observable<Product>;

    private machineSubject: BehaviorSubject<Machine>;
    public machine: Observable<Machine>;

    private deviceSubject: BehaviorSubject<Device>;
    public device: Observable<Device>;
    
    private camSubject: BehaviorSubject<Cam>;
    public cam: Observable<Cam>;


    private cartSubject: BehaviorSubject<Cart>;
    public cart: Observable<Cart>;

    constructor(
        private router: Router,
        private http: HttpClient
    ) {

        this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
        this.user = this.userSubject.asObservable();

        this.productSubject = new BehaviorSubject<Product>(JSON.parse(localStorage.getItem('product')));
        this.product = this.productSubject.asObservable();

        this.machineSubject = new BehaviorSubject<Machine>(JSON.parse(localStorage.getItem('machine')));
        this.machine = this.machineSubject.asObservable();
        
        this.deviceSubject = new BehaviorSubject<Device>(JSON.parse(localStorage.getItem('device')));
        this.device = this.deviceSubject.asObservable();

        this.camSubject = new BehaviorSubject<Cam>(JSON.parse(localStorage.getItem('cam')));
        this.cam = this.camSubject.asObservable();

        this.cartSubject = new BehaviorSubject<Cart>(JSON.parse(localStorage.getItem('cart')));
        this.cart = this.cartSubject.asObservable();


    }

    public get userValue(): User {
        return this.userSubject.value;
    }

    public get productValue(): Product {
        return this.productSubject.value;
    }

    public get machineValue(): Machine {
        return this.machineSubject.value;
    }

    public get deviceValue(): Device {
        return this.deviceSubject.value;
    }

    public get camValue(): Cam {
        return this.camSubject.value;
    }

    public get cartValue(): Cart {
        return this.cartSubject.value;
    }
    

    login(username: string, password: string,) {
        return this.http.post<User>(`${environment.apiUrl}/users/authenticate`, { username, password, })
            .pipe(tap(ref => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(ref));

                this.userSubject.next(ref);
                return ref;
            }))
            
    }

    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('user',);
        this.userSubject.next(null);
        this.router.navigate(['/login']);
    }

    register(user: User) {
        
        return this.http.post(`${environment.apiUrl}/users/register`, user);
    }

    getAll() {
        return this.http.get<User[]>(`${environment.apiUrl}/users`);
    }
    
    getUser() {
        return this.http.get<User[]>(`${environment.apiUrl}/user`)    
    }

    getAllmachines() {
        return this.http.get<Machine[]>(`${environment.apiUrl}/machines`);
    }

    getAlldevices() {
        return this.http.get<Device[]>(`${environment.apiUrl}/devices`);
    }

    getAllcams() {
        return this.http.get<Cam[]>(`${environment.apiUrl}/cams`);
    }

    getAllproducts() {
        
        return this.http.get<Product[]>(`${environment.apiUrl}/products`);
    }

    getById(id: string) {
        return this.http.get<User>(`${environment.apiUrl}/users/${id}`);
    }

    getmachineById(id: string) {
        return this.http.get<Machine>(`${environment.apiUrl}/machines/${id}`);
    }

    getdevicesById(id: string) {
        return this.http.get<User>(`${environment.apiUrl}/mmachine/${id}`);
    }

    

    update(id, params) {
        return this.http.put(`${environment.apiUrl}/users/${id}`, params)
            .pipe(map(x => {
                // update stored user if the logged in user updated their own record
                if (id == this.userValue.id) {
                    // update local storage
                    const user = { ...this.userValue, ...params };
                    localStorage.setItem('user', JSON.stringify(user));

                    // publish updated user to subscribers
                    this.userSubject.next(user);
                }
                return x;
            }));
    }

    delete(id: string) {
        return this.http.delete(`${environment.apiUrl}/users/${id}`)
            .pipe(map(x => {
                // auto logout if the logged in user deleted their own record
                if (id == this.userValue.id) {
                    this.logout();
                }
                return x;
            }));
    }
}