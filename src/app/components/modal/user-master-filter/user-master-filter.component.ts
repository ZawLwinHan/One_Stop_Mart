import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { BsDatepickerDirective } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-user-master-filter',
  templateUrl: './user-master-filter.component.html',
  styleUrls: ['./user-master-filter.component.scss'],
})
export class UserMasterFilterComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<UserMasterFilterComponent>) {}

  @ViewChild(BsDatepickerDirective, { static: false }) datepicker:
    | BsDatepickerDirective
    | undefined;
  maxDate = new Date();
  ngOnInit(): void {}

  onDismiss() {
    this.dialogRef.close();
  }
}
