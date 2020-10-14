import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { User } from '../_models';
import { Iotuser } from '../_models';
import { Machine } from '../_models';
import { Device } from '../_models';


@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private userSubject: BehaviorSubject<User>;
    public user: Observable<User>;

    private iotuserSubject: BehaviorSubject<Iotuser>;
    public iotuser: Observable<Iotuser>;

    private machineSubject: BehaviorSubject<Machine>;
    public machine: Observable<Machine>;

    private deviceSubject: BehaviorSubject<Device>;
    public device: Observable<Device>;
    

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.userSubject = new BehaviorSubject<User>(null);
        this.user = this.userSubject.asObservable();

        this.iotuserSubject = new BehaviorSubject<Iotuser>(null);
        this.iotuser = this.iotuserSubject.asObservable();

        this.machineSubject = new BehaviorSubject<Machine>(null);
        this.machine = this.machineSubject.asObservable();

        this.deviceSubject = new BehaviorSubject<Device>(null);
        this.device = this.deviceSubject.asObservable();
    }

    public get userValue(): User {
        return this.userSubject.value;
    }

    public get iotuserValue(): Iotuser {
        return this.iotuserSubject.value;
    }

    public get machineValue(): Machine {
        return this.machineSubject.value;
    }

    public get deviceValue(): Device {
        return this.deviceSubject.value;
    }

    login(username: string, password: string) {
        return this.http.post<any>(`${environment.apiUrl}/users/authenticate`, { username, password }, { withCredentials: true })
            .pipe(map(user => {
                this.userSubject.next(user);
                return user;
            }));
    }

    iotlogin(username: string, password: string) {
        return this.http.post<any>(`${environment.apiUrl}/iotusers/authenticate`, { username, password }, { withCredentials: true })
            .pipe(map(iotuser => {
                this.iotuserSubject.next(iotuser);
                return iotuser;
            }));
    }

    logout() {
        this.http.post<any>(`${environment.apiUrl}/users/revoke-token`, {}, { withCredentials: true }).subscribe();
        this.stopRefreshTokenTimer();
        this.userSubject.next(null);
        this.router.navigate(['/login']);
    }

    iotlogout() {
        this.http.post<any>(`${environment.apiUrl}/iotusers/revoke-token`, {}, { withCredentials: true }).subscribe();
        this.stopRefreshTokenTimer();
        this.userSubject.next(null);
        this.router.navigate(['/iot']);
    }

    refreshToken() {
        return this.http.post<any>(`${environment.apiUrl}/users/refresh-token`, {}, { withCredentials: true })
            .pipe(map((user) => {
                this.userSubject.next(user);
                this.startRefreshTokenTimer();
                return user;
            }));
    }

    // helper methods

    private refreshTokenTimeout;

    private startRefreshTokenTimer() {
        // parse json object from base64 encoded jwt token
        const jwtToken = JSON.parse(atob(this.userValue.jwtToken.split('.')[1]));

        // set a timeout to refresh the token a minute before it expires
        const expires = new Date(jwtToken.exp * 1000);
        const timeout = expires.getTime() - Date.now() - (60 * 1000);
        this.refreshTokenTimeout = setTimeout(() => this.refreshToken().subscribe(), timeout);
    }

    private stopRefreshTokenTimer() {
        clearTimeout(this.refreshTokenTimeout);
    }
}