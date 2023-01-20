import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimpleLayoutComponent } from './shared/layout/simple-layout/simple-layout.component';
const routes: Routes = [
  {
    path: '', redirectTo:'/dashboard', pathMatch:'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./components/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '',
    component: SimpleLayoutComponent,
    children: [{
      path: 'user-role-master',
      loadChildren: () => import('./components/user-role-master/user-role-master.module').then(m => m.UserRoleMasterModule)
    },
    {
      path: 'UserRolePermission',
      loadChildren: () => import('./components/user-role-permission/user-role-permission.module').then(m => m.UserRolePermissionModule)
    },
    {
      path: 'dashboard',
      loadChildren: () => import('./components/dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    {
      path: 'user-role-master',
      loadChildren: () => import('./components/user-role-master/user-role-master.module').then(m => m.UserRoleMasterModule)
    },
    {
      path: 'ChangePassword',
      loadChildren: () => import('./components/change-password/change-password.module').then(m => m.ChangePasswordModule)
    },
    {
      path: 'Logout',
      loadChildren: () => import('./components/logout/logout.module').then(m => m.LogoutModule)
    },
    {
      path: 'Profile',
      loadChildren: () => import('./components/profile/profile.module').then(m => m.ProfileModule)
    },

  ]
  },
  {
    path: 'CompanyName',
    loadChildren: () =>
      import('./components/user-role-master/company/company-listing.module').then(
        (m) => m.CompanyListingModule
      ),
  },
  {
    path: 'DesignationName',
    loadChildren: () =>
      import('./components/user-role-master/designation/designation-listing.module').then(
        (m) => m.DesignationListingModule
      ),
  },
  {
    path: 'DepartmentName',
    loadChildren: () =>
      import('./components/user-role-master/department/department-listing.module').then(
        (m) => m.DepartmentListingModule
      ),
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
