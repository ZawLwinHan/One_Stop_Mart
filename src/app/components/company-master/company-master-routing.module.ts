import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyMasterListingComponent } from './company-master-listing/company-master-listing.component';
import { CreateCompanyMasterComponent } from './create-company-master/create-company-master.component';
import { EditCompanyMasterComponent } from './edit-company-master/edit-company-master.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: CompanyMasterListingComponent,
      },

      {
        path: 'create-company-master',
        component: CreateCompanyMasterComponent,
      },

      {
        path: 'edit-company-master',
        component: EditCompanyMasterComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyMasterRoutingModule {}
