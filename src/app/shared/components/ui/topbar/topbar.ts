import { Component, inject } from '@angular/core';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { CommonModule } from '@angular/common';
import { Menubar } from 'primeng/menubar';
import { ThemeToggle } from '../../business/theme-toggle/theme-toggle';
import { SearchService } from '../../../../core/services/search/search';

@Component({
  selector: 'app-topbar',
  imports: [BadgeModule, AvatarModule, CommonModule, Menubar, ThemeToggle],
  templateUrl: './topbar.html',
  styleUrl: './topbar.scss',
})
export class Topbar {
  private readonly searchService = inject(SearchService);

  onSearch(event: Event) {
    const value = (event.target as HTMLInputElement).value || '';
    this.searchService.setSearchTerm(value.trim());
  }

  toggleDarkMode() {
    const el = document.querySelector('html');
    el?.classList.toggle('app-dark');
  }
}
