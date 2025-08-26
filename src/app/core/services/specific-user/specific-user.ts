import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { IUserResponse } from '../../interfaces/iuser-response';

@Injectable({
  providedIn: 'root',
})
export class SpecificUser {
  constructor(private httpClient: HttpClient) {}

  getUserData(id: number): Observable<any> {
    return this.httpClient.get(`${environment.baseURL}users/${id}`);
  }
}
