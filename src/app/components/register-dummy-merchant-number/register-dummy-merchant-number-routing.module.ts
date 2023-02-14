import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateRegisterDummyMerchantNumberComponent } from './create-register-dummy-merchant-number/create-register-dummy-merchant-number.component';
import { EditRegisterDummyMerchantNumberComponent } from './edit-register-dummy-merchant-number/edit-register-dummy-merchant-number.component';
import { RegisterDummyMerchantNumberListingComponent } from './register-dummy-merchant-number-listing/register-dummy-merchant-number-listing.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: RegisterDummyMerchantNumberListingComponent,
      },

      {
        path: 'create-register-dummy-merchant-number',
        component: CreateRegisterDummyMerchantNumberComponent,
      },

      {
        path: 'edit-register-dummy-merchant-number',
        component: EditRegisterDummyMerchantNumberComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterDummyMerchantNumberRoutingModule {}
