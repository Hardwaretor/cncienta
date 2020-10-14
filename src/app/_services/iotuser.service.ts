import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Iotuser } from '../_models';

@Injectable({ providedIn: 'root' })
export class IotuserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Iotuser[]>(`${localStorage.getItem('user')}`);
    }
}