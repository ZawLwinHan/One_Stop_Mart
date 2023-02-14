import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserMasterComponent } from './create-user-master/create-user-master.component';
import { EditUserMasterComponent } from './edit-user-master/edit-user-master.component';
import { UserMasterListingComponent } from './user-master-listing/user-master-listing.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: UserMasterListingComponent,
      },

      {
        path: 'create-user-master',
        component: CreateUserMasterComponent,
      },

      {
        path: 'edit-user-master',
        component: EditUserMasterComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserMasterRoutingModule {}
