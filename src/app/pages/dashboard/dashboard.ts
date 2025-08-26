import { Component, inject } from '@angular/core';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { Observable, map } from 'rxjs';
import { UserData } from '../../core/services/user-data';
import { IUser } from '../../core/interfaces/iuser';
import { UserSearchPipe } from '../../core/pipe/user-search-pipe';

@Component({
  selector: 'app-dashboard',
  imports: [
    FormsModule,
    TableModule,
    TagModule,
    CommonModule,
    ButtonModule,
    ConfirmDialogModule,
    UserSearchPipe,
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  private readonly userDataServices = inject(UserData);

  userData$!: Observable<IUser[]>;
  totalRecords$!: Observable<number>;

  searchTerm: string = '';
  first: number = 0;
  rows: number = 7;

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    const response$ = this.userDataServices.getUserData(this.rows, this.first);
    this.userData$ = response$.pipe(map((res) => res.users));
    this.totalRecords$ = response$.pipe(map((res) => res.total));
  }

  onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
    this.loadData();
  }

  goToNext() {
    if (!this.isLastPage()) {
      this.first += this.rows;
      this.loadData();
    }
  }

  goToPrev() {
    if (!this.isFirstPage()) {
      this.first -= this.rows;
      this.loadData();
    }
  }

  isFirstPage(): boolean {
    return this.first === 0;
  }

  isLastPage(): boolean {
    return false;
  }
}
