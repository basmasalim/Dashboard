import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from '../../interfaces/iuser';

@Pipe({
  name: 'userSort',
})
export class UserSortPipe implements PipeTransform {
  transform(users: IUser[] | null, sort: 'asc' | 'desc' | '' = ''): IUser[] {
    if (!users) return [];
    if (!sort) return users;

    return [...users].sort((a, b) =>
      sort === 'asc'
        ? a.firstName.localeCompare(b.firstName)
        : b.firstName.localeCompare(a.firstName)
    );
  }
}
