import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { BsDatepickerDirective } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-role-master-filter',
  templateUrl: './role-master-filter.component.html',
  styleUrls: ['./role-master-filter.component.scss'],
})
export class RoleMasterFilterComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<RoleMasterFilterComponent>) {}

  @ViewChild(BsDatepickerDirective, { static: false }) datepicker:
    | BsDatepickerDirective
    | undefined;
  maxDate = new Date();
  ngOnInit(): void {}

  onDismiss() {
    this.dialogRef.close();
  }
}
