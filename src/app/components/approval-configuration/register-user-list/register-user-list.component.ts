import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import {SelectionModel} from '@angular/cdk/collections';
import {RegisterUserFilterComponent} from "../../modal/register-user-filter/register-user-filter.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-register-user-list',
  templateUrl: './register-user-list.component.html',
  styleUrls: ['./register-user-list.component.scss']
})
export class RegisterUserListComponent implements OnInit {
  displayedColumns: string[] = ['select',  'companyName', 'shopName', 'approvalUserName', 'approvalUserNo', 'approvalUserEmail',
    'isCounter','isActive', 'dateTime', 'updateTime', 'createdUserName' , 'updatedUserName'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  selection = new SelectionModel<PeriodicElement>(true, []);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(RegisterUserFilterComponent, {
      width: '900px',
      data: {}
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row `;
  }

}

export interface PeriodicElement {
  companyName: string;
  shopName: string;
  approvalUserName: string;
  approvalUserNo: string;
  approvalUserEmail: string;
  isActive: boolean;
  isCounter: boolean;
  dateTime: string;
  updateTime: string;
  createdUserName: string;
  updatedUserName: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {  companyName: 'Internet Wallet Myanmar', shopName: '0054 Myin Thar',  approvalUserName:'Aung Myo', approvalUserNo:'+95 09958484545', approvalUserEmail:'aungmyo@gmail.com', isCounter:false, isActive:true, dateTime:'Mon, 08-Jan-2021 09:10:20', 'updateTime': 'Mon, 09-Jan-2021 09:14:18', createdUserName:'Aung Myo' , updatedUserName: 'Aung Myo'},
  {  companyName: 'One Stop Mart Insein', shopName: '0021 Shwe Bon Thar',  approvalUserName:'Shwe Sin', approvalUserNo:'+95 09958484545', approvalUserEmail:'shwesin@gmail.com', isCounter:true, isActive:true, dateTime:'Mon, 08-Jan-2021 09:10:20', 'updateTime': 'Mon, 09-Jan-2021 09:14:18', createdUserName:'Shwe Sin' , updatedUserName: 'Shwe Sin'},
  {  companyName: 'One Stop Mart Tarmwe', shopName: '0056 Bo Aung Kyaw',  approvalUserName:'Myo Min', approvalUserNo:'+95 09958484545', approvalUserEmail:'myomin@gmail.com', isCounter:false, isActive:true, dateTime:'Mon, 08-Jan-2021 09:10:20', 'updateTime': 'Mon, 09-Jan-2021 09:14:18', createdUserName:'Myo Min' , updatedUserName: 'Myo Min'},
  {  companyName: 'One Stop Mart North Dagon', shopName: '068 Nandarwon',  approvalUserName:'Mg Mg', approvalUserNo:'+95 09958484545', approvalUserEmail:'mgmg@gmail.com', isCounter:true, isActive:true, dateTime:'Mon, 08-Jan-2021 09:10:20', 'updateTime': 'Mon, 09-Jan-2021 09:14:18', createdUserName:'Mg Mg' , updatedUserName: 'Mg Mg'},
  {  companyName: 'Internet Wallet Myanmar', shopName: '0054 Myin Thar',  approvalUserName:'Aung Myo', approvalUserNo:'+95 09958484545', approvalUserEmail:'aungmyo@gmail.com', isCounter:false, isActive:true, dateTime:'Mon, 08-Jan-2021 09:10:20', 'updateTime': 'Mon, 09-Jan-2021 09:14:18', createdUserName:'Aung Myo' , updatedUserName: 'Aung Myo'},
  {  companyName: 'One Stop Mart Insein', shopName: '0021 Shwe Bon Thar',  approvalUserName:'Shwe Sin', approvalUserNo:'+95 09958484545', approvalUserEmail:'shwesin@gmail.com', isCounter:true, isActive:true, dateTime:'Mon, 08-Jan-2021 09:10:20', 'updateTime': 'Mon, 09-Jan-2021 09:14:18', createdUserName:'Shwe Sin' , updatedUserName: 'Shwe Sin'},
  {  companyName: 'One Stop Mart Tarmwe', shopName: '0056 Bo Aung Kyaw',  approvalUserName:'Myo Min', approvalUserNo:'+95 09958484545', approvalUserEmail:'myomin@gmail.com', isCounter:false, isActive:true, dateTime:'Mon, 08-Jan-2021 09:10:20', 'updateTime': 'Mon, 09-Jan-2021 09:14:18', createdUserName:'Myo Min' , updatedUserName: 'Myo Min'},
  {  companyName: 'One Stop Mart North Dagon', shopName: '068 Nandarwon',  approvalUserName:'Mg Mg', approvalUserNo:'+95 09958484545', approvalUserEmail:'mgmg@gmail.com', isCounter:true, isActive:true, dateTime:'Mon, 08-Jan-2021 09:10:20', 'updateTime': 'Mon, 09-Jan-2021 09:14:18', createdUserName:'Mg Mg' , updatedUserName: 'Mg Mg'},
  {  companyName: 'Internet Wallet Myanmar', shopName: '0054 Myin Thar',  approvalUserName:'Aung Myo', approvalUserNo:'+95 09958484545', approvalUserEmail:'aungmyo@gmail.com', isCounter:false, isActive:true, dateTime:'Mon, 08-Jan-2021 09:10:20', 'updateTime': 'Mon, 09-Jan-2021 09:14:18', createdUserName:'Aung Myo' , updatedUserName: 'Aung Myo'},
  {  companyName: 'One Stop Mart Insein', shopName: '0021 Shwe Bon Thar',  approvalUserName:'Shwe Sin', approvalUserNo:'+95 09958484545', approvalUserEmail:'shwesin@gmail.com', isCounter:true, isActive:true, dateTime:'Mon, 08-Jan-2021 09:10:20', 'updateTime': 'Mon, 09-Jan-2021 09:14:18', createdUserName:'Shwe Sin' , updatedUserName: 'Shwe Sin'},
  {  companyName: 'One Stop Mart Tarmwe', shopName: '0056 Bo Aung Kyaw',  approvalUserName:'Myo Min', approvalUserNo:'+95 09958484545', approvalUserEmail:'myomin@gmail.com', isCounter:false, isActive:true, dateTime:'Mon, 08-Jan-2021 09:10:20', 'updateTime': 'Mon, 09-Jan-2021 09:14:18', createdUserName:'Myo Min' , updatedUserName: 'Myo Min'},
  {  companyName: 'One Stop Mart North Dagon', shopName: '068 Nandarwon',  approvalUserName:'Mg Mg', approvalUserNo:'+95 09958484545', approvalUserEmail:'mgmg@gmail.com', isCounter:true, isActive:true, dateTime:'Mon, 08-Jan-2021 09:10:20', 'updateTime': 'Mon, 09-Jan-2021 09:14:18', createdUserName:'Mg Mg' , updatedUserName: 'Mg Mg'},
];
