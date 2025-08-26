import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from '../../core/interfaces/iuser';

@Pipe({
  name: 'userSearch',
})
export class UserSearchPipe implements PipeTransform {
  transform(users: IUser[] | null, searchTerm: string): IUser[] {
    if (!users) return [];
    if (!searchTerm) return users;

    const term = searchTerm.toLowerCase();
    return users.filter(
      (u) => u.firstName.toLowerCase().includes(term) || u.lastName.toLowerCase().includes(term)
    );
  }
}
