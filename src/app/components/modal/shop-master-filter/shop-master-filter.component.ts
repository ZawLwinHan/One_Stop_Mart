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
  hide : boolean = true
  hide1 : boolean = true

  onDismiss(){
    this.dialogRef.close();
  }

  companynames: string[] = ['One Stop Mart Insein', 'One Stop Mart Tarmwe','One Stop Mart North Dagon'];
  shopcodes:string[] = ['054', '021','045'];
  shopnames:string[] = ['054 Myint Thar', '021 Shwe Bone Thar','045 Bo Aung Kyaw'];
  contactNumbers:string[] = ['+95 0912345678', '+95 09750 123 456','+95 09750 123 456'];
  townships:string[] =['Yangon', 'Bago','Ayeyawady'];
  noOfcounters:string[] =['1', '2','3'];
  totalUserNumbers:string[] =['1', '2','3'];
  reveal(){
    this.hide = !this.hide
  }
  statelists= new FormControl;

}
