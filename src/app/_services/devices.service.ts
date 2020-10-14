import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Device } from '../_models';

@Injectable({ providedIn: 'root' })
export class DevicesService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Device[]>(`${environment.apiUrl}/devices`);
  }
}
