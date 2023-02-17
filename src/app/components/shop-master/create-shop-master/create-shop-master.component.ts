import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import { MatDialog } from '@angular/material/dialog';
import { AddCounterDetailModalComponent } from '../../modal/add-counter-detail-modal/add-counter-detail-modal.component';
import { AssignBackendModalComponent } from '../../modal/assign-backend-modal/assign-backend-modal.component';

export interface PeriodicElement {
  action:string;
  counterNo:string;
  counterName: string;
  cashoutNo: string;
  paywithokNo: string;
  view: string;

}

export interface PeriodicElement1 {
  transtype :string;
  mobileNo :string;
  backendNo  : string;
  registeredName  : string;
  Name: string;
  
}
const ELEMENT_DATA: PeriodicElement[] = [
  {action:'assets/img/icon/Edit.svg',counterNo:'0054', counterName: '0054 Myint Thar',cashoutNo:'+95 0955831 5856', paywithokNo: '+95 09 123 456 78',
  view:'assets/img/icon/Edit.svg'
  }
];

const ELEMENT_DATA1: PeriodicElement1[] = [
  { transtype: 'CASH IN',mobileNo:'(CASH IN)+95 0955831 5856', backendNo: '(CASH IN)+95 09 123 456 78',registeredName:'(CASH IN)+95 09 123 456 78',Name:'Aung Myo'
 
  }
];

@Component({
  selector: 'app-create-shop-master',
  templateUrl: './create-shop-master.component.html',
  styleUrls: ['./create-shop-master.component.scss']
})
export class CreateShopMasterComponent implements OnInit {

  hide=true;

  constructor(public dialog: MatDialog) { }
  openDialog() {
    this.dialog.open(AddCounterDetailModalComponent, {
      width: '800px',
      data: {}
    });
  }

  openDialog2() {
    this.dialog.open(AssignBackendModalComponent, {
      width: '800px',
      data: {}
    });
  }

  ngOnInit(): void {

  }
  displayedColumns: string[] = ['action','counterNo','counterName', 'cashoutNo', 'paywithokNo','view'];
  displayedColumns1: string[] = ['transtype','mobileNo', 'backendNo', 'registeredName','Name'];

  dataSource = ELEMENT_DATA;
  dataSource1 = ELEMENT_DATA1;
  
  companynames: string[] = ['Consumer Goods Myanmar limited', 'CGM Company Limited'];
  states: string[] = ['Yangon', 'Bago','Ayeyawady'];
  cities: string[] = ['Yangon', 'Bago','Ayeyawady'];
  townships: string[] = ['South Okkalapa', 'Mingalardon','Kamaryut'];


  companylists = new FormControl;
  statelists= new FormControl;
}
