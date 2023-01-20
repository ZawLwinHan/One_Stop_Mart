import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyListingRoutingModule } from './company-listing-routing.module';
import { CompanyCreateComponent } from './company-create/company-create.component';
import { CompanyEditComponent } from './company-edit/company-edit.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    CompanyCreateComponent,
    CompanyEditComponent
  ],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    CommonModule,
    CompanyListingRoutingModule,
    MatCheckboxModule,
    MatToolbarModule
  ]
})
export class CompanyListingModule { }
