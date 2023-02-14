import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyMasterRoutingModule } from './company-master-routing.module';
import { CompanyMasterListingComponent } from './company-master-listing/company-master-listing.component';
import { CreateCompanyMasterComponent } from './create-company-master/create-company-master.component';
import { EditCompanyMasterComponent } from './edit-company-master/edit-company-master.component';
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
    CompanyMasterListingComponent,
    CreateCompanyMasterComponent,
    EditCompanyMasterComponent,
  ],
  imports: [
    CommonModule,
    CompanyMasterRoutingModule,
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
  ],
})
export class CompanyMasterModule {}
