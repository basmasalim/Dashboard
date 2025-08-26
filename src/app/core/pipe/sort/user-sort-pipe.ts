import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from '../../interfaces/iuser';

@Pipe({
  name: 'userSort',
})
export class UserSortPipe implements PipeTransform {
  transform(users: IUser[] | null, sortOrder: string): IUser[] {
    if (!users) return [];

    if (sortOrder === 'asc') {
      return [...users].sort((a, b) => a.firstName.localeCompare(b.firstName));
    }

    if (sortOrder === 'desc') {
      return [...users].sort((a, b) => b.firstName.localeCompare(a.firstName));
    }

    return users;
  }
}
