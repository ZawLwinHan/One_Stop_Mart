import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-designation-listing',
  templateUrl: './designation-listing.component.html',
  styleUrls: ['./designation-listing.component.scss']
})
export class DesignationListingComponent implements OnInit {

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['designName', 'remark', 'isActive', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
export interface PeriodicElement {
  designName: string;
  remark: string;
  isActive: string;
  action: string;

}


const ELEMENT_DATA: PeriodicElement[] = [
  {designName: 'Consumer Goods Myanmar Limited', remark: 'Account Department', isActive:'Yes', action:'assets/img/Icon/Edit Pattern.svg'},

  {designName: 'Consumer Goods Myanmar Limited', remark: 'Admin Department', isActive:'Yes', action:'assets/img/Icon/Edit Pattern.svg'},

  {designName: 'Consumer Goods Myanmar Limited', remark: 'Sales Department', isActive:'Yes',  action:'assets/img/Icon/Edit Pattern.svg'},

  {designName: 'Consumer Goods Myanmar Limited', remark: 'Sales Department', isActive:'Yes', action:'assets/img/Icon/Edit Pattern.svg'},

  {designName: 'Consumer Goods Myanmar Limited', remark: 'Sales Department', isActive:'No',  action:'assets/img/Icon/Edit Pattern.svg'},

  {designName: 'Consumer Goods Myanmar Limited', remark: 'Account Department', isActive:'Yes',  action:'assets/img/Icon/Edit Pattern.svg'},

  {designName: 'Consumer Goods Myanmar Limited', remark: 'Admin Department', isActive:'Yes', action:'assets/img/Icon/Edit Pattern.svg'},

  {designName: 'Consumer Goods Myanmar Limited', remark: 'Sales Department', isActive:'Yes',  action:'assets/img/Icon/Edit Pattern.svg'},

  {designName: 'Consumer Goods Myanmar Limited', remark: 'Sales Department', isActive:'Yes', action:'assets/img/Icon/Edit Pattern.svg'},

  {designName: 'Consumer Goods Myanmar Limited', remark: 'Sales Department', isActive:'No',  action:'assets/img/Icon/Edit Pattern.svg'},

  {designName: 'Consumer Goods Myanmar Limited', remark: 'Account Department', isActive:'Yes',  action:'assets/img/Icon/Edit Pattern.svg'},

  {designName: 'Consumer Goods Myanmar Limited', remark: 'Admin Department', isActive:'Yes', action:'assets/img/Icon/Edit Pattern.svg'},

  {designName: 'Consumer Goods Myanmar Limited', remark: 'Sales Department', isActive:'Yes',  action:'assets/img/Icon/Edit Pattern.svg'},

  {designName: 'Consumer Goods Myanmar Limited', remark: 'Sales Department', isActive:'Yes', action:'assets/img/Icon/Edit Pattern.svg'},

  {designName: 'Consumer Goods Myanmar Limited', remark: 'Sales Department', isActive:'No',  action:'assets/img/Icon/Edit Pattern.svg'},

  {designName: 'Consumer Goods Myanmar Limited', remark: 'Account Department', isActive:'Yes',  action:'assets/img/Icon/Edit Pattern.svg'},

  {designName: 'Consumer Goods Myanmar Limited', remark: 'Admin Department', isActive:'Yes', action:'assets/img/Icon/Edit Pattern.svg'},

  {designName: 'Consumer Goods Myanmar Limited', remark: 'Sales Department', isActive:'Yes',  action:'assets/img/Icon/Edit Pattern.svg'},

  {designName: 'Consumer Goods Myanmar Limited', remark: 'Sales Department', isActive:'Yes', action:'assets/img/Icon/Edit Pattern.svg'},

  {designName: 'Consumer Goods Myanmar Limited', remark: 'Sales Department', isActive:'No',  action:'assets/img/Icon/Edit Pattern.svg'},

  {designName: 'Consumer Goods Myanmar Limited', remark: 'Account Department', isActive:'Yes',  action:'assets/img/Icon/Edit Pattern.svg'},

  {designName: 'Consumer Goods Myanmar Limited', remark: 'Admin Department', isActive:'Yes', action:'assets/img/Icon/Edit Pattern.svg'},

  {designName: 'Consumer Goods Myanmar Limited', remark: 'Sales Department', isActive:'Yes',  action:'assets/img/Icon/Edit Pattern.svg'},

  {designName: 'Consumer Goods Myanmar Limited', remark: 'Sales Department', isActive:'Yes', action:'assets/img/Icon/Edit Pattern.svg'},

  {designName: 'Consumer Goods Myanmar Limited', remark: 'Sales Department', isActive:'No',  action:'assets/img/Icon/Edit Pattern.svg'},

];
