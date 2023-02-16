import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { BsDatepickerDirective } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-register-dummy-merchantnumber-filter',
  templateUrl: './register-dummy-merchantnumber-filter.component.html',
  styleUrls: ['./register-dummy-merchantnumber-filter.component.scss'],
})
export class RegisterDummyMerchantnumberFilterComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<RegisterDummyMerchantnumberFilterComponent>
  ) {}

  @ViewChild(BsDatepickerDirective, { static: false }) datepicker:
    | BsDatepickerDirective
    | undefined;
  maxDate = new Date();
  ngOnInit(): void {}

  onDismiss() {
    this.dialogRef.close();
  }
}
