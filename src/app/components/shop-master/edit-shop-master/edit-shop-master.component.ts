import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
@Component({
  selector: 'app-edit-shop-master',
  templateUrl: './edit-shop-master.component.html',
  styleUrls: ['./edit-shop-master.component.scss']
})
export class EditShopMasterComponent implements OnInit {
  myModel = true;


  constructor() { }

  ngOnInit(): void {
  }

  companynames: string[] = ['Consumer Goods Myanmar limited', 'CGM Company Limited'];
  states: string[] = ['Yangon', 'Bago','Ayeyawady'];
  cities: string[] = ['Yangon', 'Bago','Ayeyawady'];
  townships: string[] = ['South Okkalapa', 'Mingalardon','Kamaryut'];


  companylists = new FormControl;
  statelists= new FormControl;

}
