import { Component,HostListener, ViewChild  , ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-shop-master-filter',
  templateUrl: './shop-master-filter.component.html',
  styleUrls: ['./shop-master-filter.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class ShopMasterFilterComponent {
 
  constructor(public dialogRef: MatDialogRef<ShopMasterFilterComponent>) { }

  ngOnInit(): void {
  }

  onDismiss(){
    this.dialogRef.close();
  }

  advancenumbers: string[] = ['+95 0912345678', '+95 09750 123 456'];
  cashoutnumbers:string[] = ['+95 09452 123 456 ', '+95 09662 345 671'];
  ampaywithokdollarnumbers: string[] = ['+95 0912345678', '+95 09750 123 456'];
  paywithokdollarnumbers: string[] = ['+95 0912345678', '+95 09750 123 456'];

}
