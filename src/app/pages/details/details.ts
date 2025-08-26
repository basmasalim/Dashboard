import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { IUser } from '../../core/interfaces/iuser';
import { SpecificUser } from '../../core/services/specific-user/specific-user';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-details',
  imports: [DatePipe, RouterLink, CommonModule],
  templateUrl: './details.html',
  styleUrl: './details.scss',
})
export class Details implements OnInit {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly specificUserService = inject(SpecificUser);

  constructor(private cdr: ChangeDetectorRef) {}

  user: IUser | null = null;
  loading = true;

  ngOnInit(): void {
    this.getUserDetails();
  }

  getUserDetails(): void {
    const id = Number(this.activatedRoute.snapshot.params['id']);

    this.specificUserService.getUserData(id).subscribe({
      next: (res) => {
        console.log('User Data:', res);
        this.user = res;
        this.loading = false;
        this.cdr.detectChanges(); // 👈 يحل المشكلة
      },
      error: (err) => {
        console.error('Error loading user details:', err);
        this.loading = false;
      },
    });
  }
}
