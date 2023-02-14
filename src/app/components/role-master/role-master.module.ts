import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoleMasterRoutingModule } from './role-master-routing.module';
import { RoleMasterListingComponent } from './role-master-listing/role-master-listing.component';
import { CreateRoleMasterComponent } from './create-role-master/create-role-master.component';
import { EditRoleMasterComponent } from './edit-role-master/edit-role-master.component';
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
    RoleMasterListingComponent,
    CreateRoleMasterComponent,
    EditRoleMasterComponent,
  ],
  imports: [
    CommonModule,
    RoleMasterRoutingModule,
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
export class RoleMasterModule {}
