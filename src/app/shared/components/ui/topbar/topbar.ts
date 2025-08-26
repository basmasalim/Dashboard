import { Component, inject } from '@angular/core';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { CommonModule } from '@angular/common';
import { Menubar } from 'primeng/menubar';
import { RouterLink } from '@angular/router';
import { ThemeToggle } from '../../business/theme-toggle/theme-toggle';

@Component({
  selector: 'app-topbar',
  imports: [BadgeModule, AvatarModule, CommonModule, Menubar, ThemeToggle],
  templateUrl: './topbar.html',
  styleUrl: './topbar.scss',
})
export class Topbar {
  toggleDarkMode() {
    const el = document.querySelector('html');
    el?.classList.toggle('app-dark');
  }
}
