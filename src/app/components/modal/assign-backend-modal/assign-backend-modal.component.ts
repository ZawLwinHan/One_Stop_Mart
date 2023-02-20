import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-assign-backend-modal',
  templateUrl: './assign-backend-modal.component.html',
  styleUrls: ['./assign-backend-modal.component.scss']
})
export class AssignBackendModalComponent implements OnInit {
  @Output() showTable = new EventEmitter<boolean>();

  show():void {
    this.showTable.emit(true);
  }

  constructor(public dialogRef: MatDialogRef<AssignBackendModalComponent>) { }

  ngOnInit(): void {
  }
  hide : boolean = true

  onDismiss(){
    this.dialogRef.close();
  }

  backendnumbers: string[] = ['CASH IN9(+95 0912345678)', 'CASH IN(+95 09750 123 456)'];
  transtypes:string[] = ['CASH IN', 'REFUND BALANCE','BONUS POINTS','TOP UP','GIFT CARD'];


  reveal(){
    this.hide = !this.hide
  }

}
