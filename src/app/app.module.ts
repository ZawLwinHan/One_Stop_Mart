import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReqInterceptor } from './core/interceptor/req-interceptor.service';
import { UserRolePermissionFilterComponent } from './components/modal/user-role-permission-filter/user-role-permission-filter.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ConfirmAlertComponent } from './components/modal/confirm-alert/confirm-alert.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { ShopMasterFilterComponent } from './components/modal/shop-master-filter/shop-master-filter.component';
import { AssignBackendModalComponent } from './components/modal/assign-backend-modal/assign-backend-modal.component';
import { FlexModule } from '@angular/flex-layout';
import { RegisterUserFilterComponent } from './components/modal/register-user-filter/register-user-filter.component';
import { AddCounterDetailModalComponent } from './components/modal/add-counter-detail-modal/add-counter-detail-modal.component';
import { UserMasterFilterComponent } from './components/modal/user-master-filter/user-master-filter.component';
import { RoleMasterFilterComponent } from './components/modal/role-master-filter/role-master-filter.component';
import { RegisterDummyMerchantnumberFilterComponent } from './components/modal/register-dummy-merchantnumber-filter/register-dummy-merchantnumber-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    UserRolePermissionFilterComponent,
    ConfirmAlertComponent,
    ShopMasterFilterComponent,
    AssignBackendModalComponent,
    RegisterUserFilterComponent,
    AddCounterDetailModalComponent,
    UserMasterFilterComponent,
    RoleMasterFilterComponent,
    RegisterDummyMerchantnumberFilterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    RouterModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatDialogModule,
    MatDatepickerModule,
    MatSelectModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatRippleModule,
    MatExpansionModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatRadioModule,
    MatToolbarModule,
    BsDatepickerModule.forRoot(),
    NgxMaterialTimepickerModule,
    NgxMaterialTimepickerModule,
    FlexModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ReqInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  exports: [
    RegisterUserFilterComponent
  ]
})
export class AppModule {}
