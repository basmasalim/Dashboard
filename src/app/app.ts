import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Loading } from './core/services/loading/loading';
import { ProgressSpinner } from 'primeng/progressspinner';
import { AsyncPipe } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProgressSpinner, AsyncPipe],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('Dashboard');
  constructor(private loadingService: Loading) {}

  get loading$() {
    return this.loadingService.loading$;
  }
}
