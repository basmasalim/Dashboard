import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { IUserResponse } from '../../interfaces/iuser-response';

@Injectable({
  providedIn: 'root',
})
export class UserData {
  constructor(private httpClient: HttpClient) {}

  getUserData(limit: number, skip: number): Observable<IUserResponse> {
    return this.httpClient.get<IUserResponse>(
      `${environment.baseURL}users?limit=${limit}&skip=${skip}`
    );
  }
}
