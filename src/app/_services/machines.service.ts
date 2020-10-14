import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Machine } from '../_models';

@Injectable({ providedIn: 'root' })
export class MachinesService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Machine[]>(`${environment.apiUrl}/machines`);
  }
}
