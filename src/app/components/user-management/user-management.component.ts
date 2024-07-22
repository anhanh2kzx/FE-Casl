import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { UserService } from '../../service/user.service';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-user-management-management',
  standalone: true,
  imports: [CommonModule, TableModule, Button],
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.css',
})
export class UserManagementComponent implements OnInit {
  users: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getListUser();
  }

  private getListUser() {
    this.userService.getListUser().subscribe((res) => {
      console.log(res);
      this.users = res;
    });
  }
}
