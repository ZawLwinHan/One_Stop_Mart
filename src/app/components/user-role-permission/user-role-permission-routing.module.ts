import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRolePermissionListingComponent } from '../user-role-permission/user-role-permission-listing/user-role-permission-listing.component';
import { CreateUserRolePermissionComponent  } from '../user-role-permission/create-user-role-permission/create-user-role-permission.component';
import { EditUserRolePermissionComponent } from '../user-role-permission/edit-user-role-permission/edit-user-role-permission.component';

const routes: Routes = [
  {
    path:'',
    children: [
      {
        path:'',
        component:  UserRolePermissionListingComponent
      },

      {
        path:'create-user-role-permission',
        component: CreateUserRolePermissionComponent
      },
      {
        path:'edit-user-role-permission',
        component: EditUserRolePermissionComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRolePermissionRoutingModule { }
