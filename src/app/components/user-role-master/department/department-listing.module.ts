import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentListingRoutingModule } from './department-listing-routing.module';
import { DepartmentCreateComponent } from './department-create/department-create.component';
import { DepartmentEditComponent } from './department-edit/department-edit.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [
    DepartmentCreateComponent,
    DepartmentEditComponent
  ],
  imports: [
    CommonModule,
    DepartmentListingRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule,
    MatToolbarModule
  ]
})
export class DepartmentListingModule { }
