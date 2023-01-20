import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignationListingRoutingModule } from './designation-listing-routing.module';
import { DesignationCreateComponent } from './designation-create/designation-create.component';
import { DesignationEditComponent } from './designation-edit/designation-edit.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [
    DesignationCreateComponent,
    DesignationEditComponent
  ],
  imports: [
    CommonModule,
    DesignationListingRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule,
    MatToolbarModule
  ]
})
export class DesignationListingModule { }
