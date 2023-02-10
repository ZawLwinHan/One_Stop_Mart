import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatSelectModule} from "@angular/material/select";
import {FlexModule} from "@angular/flex-layout";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import { ShopMasterRoutingModule } from './shop-master-routing.module';
import { ShopMasterListingComponent } from './shop-master-listing/shop-master-listing.component';
import { CreateShopMasterComponent } from './create-shop-master/create-shop-master.component';
import { EditShopMasterComponent } from './edit-shop-master/edit-shop-master.component';


@NgModule({
  declarations: [
    ShopMasterListingComponent,
    CreateShopMasterComponent,
    EditShopMasterComponent
  ],
  imports: [
    CommonModule,
    ShopMasterRoutingModule,
    MatButtonModule,
    MatTooltipModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatTableModule,
    MatCheckboxModule,
    MatSelectModule,
    FlexModule,
    MatInputModule,
    MatIconModule
  ]
})
export class ShopMasterModule { }
