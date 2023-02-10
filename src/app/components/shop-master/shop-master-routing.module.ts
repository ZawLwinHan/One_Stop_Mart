import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateShopMasterComponent } from './create-shop-master/create-shop-master.component';
import { EditShopMasterComponent } from './edit-shop-master/edit-shop-master.component';
import { ShopMasterListingComponent } from './shop-master-listing/shop-master-listing.component';

const routes: Routes = [
  {
    path:'',
    children: [
      {
        path:'',
        component:ShopMasterListingComponent  
      },

      {
        path:'create-shop-master',
        component: CreateShopMasterComponent
      },

      {
        path:'edit-shop-master',
        component: EditShopMasterComponent
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopMasterRoutingModule { }
