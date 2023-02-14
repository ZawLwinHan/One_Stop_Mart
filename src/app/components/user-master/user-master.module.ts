import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserMasterRoutingModule } from './user-master-routing.module';
import { CreateUserMasterComponent } from './create-user-master/create-user-master.component';
import { EditUserMasterComponent } from './edit-user-master/edit-user-master.component';
import { UserMasterListingComponent } from './user-master-listing/user-master-listing.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    CreateUserMasterComponent,
    EditUserMasterComponent,
    UserMasterListingComponent,
  ],
  imports: [
    CommonModule,
    UserMasterRoutingModule,
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
export class UserMasterModule {}
