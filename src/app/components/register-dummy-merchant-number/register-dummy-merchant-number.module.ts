import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterDummyMerchantNumberRoutingModule } from './register-dummy-merchant-number-routing.module';
import { RegisterDummyMerchantNumberListingComponent } from './register-dummy-merchant-number-listing/register-dummy-merchant-number-listing.component';
import { CreateRegisterDummyMerchantNumberComponent } from './create-register-dummy-merchant-number/create-register-dummy-merchant-number.component';
import { EditRegisterDummyMerchantNumberComponent } from './edit-register-dummy-merchant-number/edit-register-dummy-merchant-number.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    RegisterDummyMerchantNumberListingComponent,
    CreateRegisterDummyMerchantNumberComponent,
    EditRegisterDummyMerchantNumberComponent,
  ],
  imports: [
    CommonModule,
    RegisterDummyMerchantNumberRoutingModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatTooltipModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
  ],
})
export class RegisterDummyMerchantNumberModule {}
