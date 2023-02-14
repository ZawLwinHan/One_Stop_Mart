import {Component, OnInit, ViewChild} from '@angular/core';
import {BsDatepickerDirective} from "ngx-bootstrap/datepicker";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-register-user-filter',
  templateUrl: './register-user-filter.component.html',
  styleUrls: ['./register-user-filter.component.scss']
})
export class RegisterUserFilterComponent implements OnInit {

  @ViewChild(BsDatepickerDirective, { static: false }) datepicker: BsDatepickerDirective | undefined;maxDate = new Date();

  constructor(public dialogRef: MatDialogRef<RegisterUserFilterComponent>) { }

  ngOnInit(): void {
  }

  onDismiss(){
    this.dialogRef.close();
  }

}
