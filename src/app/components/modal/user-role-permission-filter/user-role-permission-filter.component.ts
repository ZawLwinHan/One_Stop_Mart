import { Component,HostListener, ViewChild  , ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { BsDatepickerDirective } from 'ngx-bootstrap/datepicker';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-role-permission-filter',
  templateUrl: './user-role-permission-filter.component.html',
  styleUrls: ['./user-role-permission-filter.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class UserRolePermissionFilterComponent  {

  @ViewChild(BsDatepickerDirective, { static: false }) datepicker: BsDatepickerDirective | undefined;maxDate = new Date();
 
  constructor(public dialogRef: MatDialogRef<UserRolePermissionFilterComponent>) { }

  ngOnInit(): void {
  }

  onDismiss(){
    this.dialogRef.close();
  }

}
