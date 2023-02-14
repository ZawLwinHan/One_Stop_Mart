import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterDummyMerchantNumberRoutingModule } from './register-dummy-merchant-number-routing.module';
import { RegisterDummyMerchantNumberListingComponent } from './register-dummy-merchant-number-listing/register-dummy-merchant-number-listing.component';
import { CreateRegisterDummyMerchantNumberComponent } from './create-register-dummy-merchant-number/create-register-dummy-merchant-number.component';
import { EditRegisterDummyMerchantNumberComponent } from './edit-register-dummy-merchant-number/edit-register-dummy-merchant-number.component';


@NgModule({
  declarations: [
    RegisterDummyMerchantNumberListingComponent,
    CreateRegisterDummyMerchantNumberComponent,
    EditRegisterDummyMerchantNumberComponent
  ],
  imports: [
    CommonModule,
    RegisterDummyMerchantNumberRoutingModule
  ]
})
export class RegisterDummyMerchantNumberModule { }
