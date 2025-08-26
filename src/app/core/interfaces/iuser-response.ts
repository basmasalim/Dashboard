import { IUser } from './iuser';

export interface IUserResponse {
  users: IUser[];
  total: number;
  skip: number;
  limit: number;
}
