import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from '../../interfaces/iuser';

@Pipe({
  name: 'userSearch',
})
export class UserSearchPipe implements PipeTransform {
  transform(users: IUser[] | null, searchTerm: string, role: string): IUser[] {
    if (!users) return [];

    let filtered = users;

    // filter by search
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (u) =>
          u.firstName.toLowerCase().includes(term) ||
          u.lastName.toLowerCase().includes(term) ||
          u.id.toString().includes(term)
      );
    }

    // filter by role
    if (role) {
      filtered = filtered.filter((u) => u.role === role);
    }

    return filtered;
  }
}
