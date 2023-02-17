import { Component,HostListener, ViewChild  , ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-add-counter-detail-modal',
  templateUrl: './add-counter-detail-modal.component.html',
  styleUrls: ['./add-counter-detail-modal.component.scss']
})
export class AddCounterDetailModalComponent   {

  constructor(public dialogRef: MatDialogRef<AddCounterDetailModalComponent>) { }

  ngOnInit(): void {
  }
  hide : boolean = true
  hide1 : boolean = true

  onDismiss(){
    this.dialogRef.close();
  }

  advancenumbers: string[] = ['+95 0912345678', '+95 09750 123 456'];
  cashoutnumbers:string[] = ['+95 09452 123 456 ', '+95 09662 345 671'];
  ampaywithokdollarnumbers: string[] = ['+95 0912345678', '+95 09750 123 456'];
  paywithokdollarnumbers: string[] = ['+95 0912345678', '+95 09750 123 456'];

  reveal(){
    this.hide = !this.hide
  }
}
