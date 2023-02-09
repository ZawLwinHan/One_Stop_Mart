import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApprovalConfigurationRoutingModule } from './approval-configuration-routing.module';
import { RegisterUserListComponent } from './register-user-list/register-user-list.component';
import {MatButtonModule} from "@angular/material/button";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {MatCheckboxModule} from "@angular/material/checkbox";
import { CreateRegisterUserComponent } from './create-register-user/create-register-user.component';
import {MatSelectModule} from "@angular/material/select";
import {FlexModule} from "@angular/flex-layout";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import { EditRegisterUserComponent } from './edit-register-user/edit-register-user.component';
import { DeviceAuthorizationComponent } from './device-authorization/device-authorization.component';
import { CreateDeviceAuthorizationComponent } from './create-device-authorization/create-device-authorization.component';
import { EditDeviceAuthorizationComponent } from './edit-device-authorization/edit-device-authorization.component';
import { TransactionAmountListComponent } from './transaction-amount-list/transaction-amount-list.component';
import { CreateTransactionAmountComponent } from './create-transaction-amount/create-transaction-amount.component';
import { EditTransactionAmountComponent } from './edit-transaction-amount/edit-transaction-amount.component';


@NgModule({
  declarations: [
    RegisterUserListComponent,
    CreateRegisterUserComponent,
    EditRegisterUserComponent,
    DeviceAuthorizationComponent,
    CreateDeviceAuthorizationComponent,
    EditDeviceAuthorizationComponent,
    TransactionAmountListComponent,
    CreateTransactionAmountComponent,
    EditTransactionAmountComponent,
  ],
  imports: [
    CommonModule,
    ApprovalConfigurationRoutingModule,
    MatButtonModule,
    MatTooltipModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatTableModule,
    MatCheckboxModule,
    MatSelectModule,
    FlexModule,
    MatInputModule,
    MatIconModule
  ]
})
export class ApprovalConfigurationModule { }
