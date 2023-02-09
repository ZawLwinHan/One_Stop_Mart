import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterUserListComponent} from "./register-user-list/register-user-list.component";
import {CreateRegisterUserComponent} from "./create-register-user/create-register-user.component";
import {EditRegisterUserComponent} from "./edit-register-user/edit-register-user.component";
import {DeviceAuthorizationComponent} from "./device-authorization/device-authorization.component";
import {CreateDeviceAuthorizationComponent} from "./create-device-authorization/create-device-authorization.component";
import {EditDeviceAuthorizationComponent} from "./edit-device-authorization/edit-device-authorization.component";
import {TransactionAmountListComponent} from "./transaction-amount-list/transaction-amount-list.component";
import {CreateTransactionAmountComponent} from "./create-transaction-amount/create-transaction-amount.component";
import {EditTransactionAmountComponent} from "./edit-transaction-amount/edit-transaction-amount.component";

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
      path: 'device-authorization-list',
      component: DeviceAuthorizationComponent,
    },
    {
      path: 'create-device-authorization',
      component: CreateDeviceAuthorizationComponent,
    },
    {
      path: 'edit-device-authorization',
      component: EditDeviceAuthorizationComponent,
    },
    {
      path: 'transaction-amount-list',
      component: TransactionAmountListComponent,
    },
    {
      path: 'create-transaction-amount',
      component: CreateTransactionAmountComponent,
    },
    {
      path: 'edit-transaction-amount',
      component: EditTransactionAmountComponent,
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApprovalConfigurationRoutingModule { }
