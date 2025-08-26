import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User_MOCk } from '../mock/userData.moke';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { IUserResponse } from '../interfaces/iuser-response';

@Injectable({
  providedIn: 'root',
})
export class UserData {
  private readonly userData = User_MOCk;

  constructor(private httpClient: HttpClient) {}

  getUserData(limit: number, skip: number): Observable<IUserResponse> {
    return this.httpClient.get<IUserResponse>(
      `${environment.baseURL}users?limit=${limit}&skip=${skip}`
    );
  }
}
