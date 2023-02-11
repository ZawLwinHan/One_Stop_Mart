import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import { MatDialog } from '@angular/material/dialog';
import { ShopMasterFilterComponent } from '../../modal/shop-master-filter/shop-master-filter.component';

@Component({
  selector: 'app-create-shop-master',
  templateUrl: './create-shop-master.component.html',
  styleUrls: ['./create-shop-master.component.scss']
})
export class CreateShopMasterComponent implements OnInit {

  hide=true;

  constructor(public dialog: MatDialog) { }
  openDialog() {
    this.dialog.open(ShopMasterFilterComponent, {
      width: '1000px',
      data: {}
    });
  }

  ngOnInit(): void {

  }

  companynames: string[] = ['Consumer Goods Myanmar limited', 'CGM Company Limited'];
  states: string[] = ['Yangon', 'Bago','Ayeyawady'];
  cities: string[] = ['Yangon', 'Bago','Ayeyawady'];
  townships: string[] = ['South Okkalapa', 'Mingalardon','Kamaryut'];


  companylists = new FormControl;
  statelists= new FormControl;
}
