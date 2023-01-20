import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoleMasterRoutingModule } from './user-role-master-routing.module';
import { CompanyListingComponent } from './company/company-listing/company-listing.component';
import { DepartmentListingComponent } from './department/department-listing/department-listing.component';
import { DesignationListingComponent } from './designation/designation-listing/designation-listing.component';
import {MatButtonModule} from "@angular/material/button";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [CompanyListingComponent, DepartmentListingComponent, DesignationListingComponent],
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    CommonModule,
    UserRoleMasterRoutingModule,
    MatButtonModule,
    MatTooltipModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatToolbarModule,
    MatCheckboxModule


  ]
})
export class UserRoleMasterModule { 

}
