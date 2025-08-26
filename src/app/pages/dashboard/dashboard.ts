import { Component, inject, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { Observable, finalize, map } from 'rxjs';
import { UserData } from '../../core/services/users/user-data';
import { IUser } from '../../core/interfaces/iuser';
import { UserSearchPipe } from '../../core/pipe/serach/user-search-pipe';
import { Menu } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { Loading } from '../../core/services/loading/loading';
import { ROLES } from '../../core/constants/role.constants';
import { UserSortPipe } from '../../core/pipe/sort/user-sort-pipe';
import { SORT_OPTIONS, SortOptionValue } from '../../core/constants/sort.constants';
import { SearchService } from '../../core/services/search/search';
import { Topbar } from '../../shared/components/ui/topbar/topbar';

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
    Menu,
    UserSortPipe,
    Topbar,
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard implements OnInit {
  private readonly userDataServices = inject(UserData);
  private readonly router = inject(Router);
  private readonly loadingService = inject(Loading);
  private readonly searchService = inject(SearchService);

  userData$!: Observable<IUser[]>;
  totalRecords$!: Observable<number>;
  menuItems: { [key: string]: MenuItem[] } = {};
  searchTermB = '';

  searchTerm: string = '';
  first: number = 0;
  rows: number = 7;
  totalRecords: number = 0;
  roles = ROLES;

  sortOptions = SORT_OPTIONS;
  selectedSort: SortOptionValue | '' = '';
  filteredRole = '';
  searchTerm$ = this.searchService.searchTerm$;

  ngOnInit() {
    this.loadData();
    this.prepareMenuItems();
    // this.onSearch();
  }

  loadData() {
    this.loadingService.show();

    const response$ = this.userDataServices
      .getUserData(this.rows, this.first)
      .pipe(finalize(() => this.loadingService.hide()));

    this.userData$ = response$.pipe(map((res) => res.users));

    response$.subscribe({
      next: (res) => {
        this.totalRecords = res.total;
      },
    });
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
    return this.first + this.rows >= this.totalRecords;
  }

  // ? =============================> Context Menu
  prepareMenuItems() {
    this.userData$?.subscribe((users) => {
      users.forEach((user) => {
        this.menuItems[user.id] = [
          {
            label: 'See details',
            icon: 'pi pi-eye mr-2',
            command: () => {
              this.router.navigate(['/userDetails', user.id]);
            },
          },
        ];
      });
    });
  }

  // ? =============================> Filter Btn

  applyRoleFilter(role: string) {
    this.filteredRole = role;
  }

  get activeSearchTerm(): string {
    return this.searchTerm || this.searchTermB || '';
  }
}
