import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateRoleMasterComponent } from './create-role-master/create-role-master.component';
import { EditRoleMasterComponent } from './edit-role-master/edit-role-master.component';
import { RoleMasterListingComponent } from './role-master-listing/role-master-listing.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: RoleMasterListingComponent,
      },

      {
        path: 'create-role-master',
        component: CreateRoleMasterComponent,
      },

      {
        path: 'edit-role-master',
        component: EditRoleMasterComponent,
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoleMasterRoutingModule {}
