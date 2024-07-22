import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { AuthGuard } from './auth/auth.guard';
import { RoleManagementComponent } from './components/role-management/role-management.component';

export const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'user-management',
    component: UserManagementComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'role-management',
    component: RoleManagementComponent,
    // canActivate: [AuthGuard],
  },
  {
    path: '**',
    redirectTo: '/login',
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];
