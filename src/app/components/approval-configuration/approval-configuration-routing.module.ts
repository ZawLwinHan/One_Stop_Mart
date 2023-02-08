import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterUserListComponent} from "./register-user-list/register-user-list.component";
import {CreateRegisterUserComponent} from "./create-register-user/create-register-user.component";
import {EditRegisterUserComponent} from "./edit-register-user/edit-register-user.component";
import {DeviceAuthorizationListComponent} from "./device-authorization-list/device-authorization-list.component";
import {CreateDeviceAuthorizationComponent} from "./create-device-authorization/create-device-authorization.component";
import {EditDeviceAuthorizationComponent} from "./edit-device-authorization/edit-device-authorization.component";

const routes: Routes = [{
  path: '',
  children: [
    {
      path: '',
      component: RegisterUserListComponent,
    },
    {
      path: 'create-register-user',
      component: CreateRegisterUserComponent,
    },
    {
      path: 'edit-register-user',
      component: EditRegisterUserComponent,
    },
    {
      path: 'device-authorization-user',
      component: DeviceAuthorizationListComponent,
    },
    {
      path: 'create-device-authorization',
      component: CreateDeviceAuthorizationComponent,
    },
    {
      path: 'edit-device-authorization',
      component: EditDeviceAuthorizationComponent,
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApprovalConfigurationRoutingModule { }
