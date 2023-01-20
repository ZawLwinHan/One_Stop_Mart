import { AfterViewInit, Component, ViewChild, ViewEncapsulation  } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { UserRolePermissionFilterComponent } from 'src/app/components/modal/user-role-permission-filter/user-role-permission-filter.component';
import {MatTableDataSource} from '@angular/material/table';

import { MatDialog } from '@angular/material/dialog';
import { RouterLinkActive } from '@angular/router';
import { active } from 'd3';

@Component({
  selector: 'app-user-role-permission-listing',
  templateUrl: './user-role-permission-listing.component.html',
  styleUrls: ['./user-role-permission-listing.component.scss']
})
export class UserRolePermissionListingComponent implements AfterViewInit {

  constructor(public dialog: MatDialog) {}
  openDialog() {
    this.dialog.open(UserRolePermissionFilterComponent, {
      width: '900px',
      data: {}
    });
  }

  // openDialog() {
  //   const dialogRef = this.dialog.open(UserRolePermissionFilterComponent);

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }

  displayedColumns: string[] = ['profile', 'name', 'mobile', 'type',
    'companyName', 'department', 'designation', 'transaction', 'rolePermission', 'description',
    'isActive', 'dateTime', 'updateTime', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    RouterLinkActive
    this.dataSource.paginator = this.paginator;
  }
}
// constructor(public dialog: MatDialog) { }

  // ngOnInit(): void {

  // }

// filterTable();{
//   const dialogRef = this.dialog.open(UserRolePermissionFilterComponent, {
//     width: '850px',
//     data: {}
//     });

//     dialogRef.afterClosed().subscribe(result => {
//       if(result){}
//   });
// }



export interface PeriodicElement {
  profile: string;
  name: string;
  companyName: string;
  department: string;
  designation: string;
  mobile: string;
  type: string;
  transaction: string;
  rolePermission: string;
  description: string;
  isActive: boolean;
  dateTime: string;
  updateTime: string;
  action: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {profile: 'assets/img/user_images/profile-pic.jpg', name: 'Aye Aye', companyName: 'CGM', department: 'Account Department', designation: 'Accoutant', mobile: '+95 09421056929', type:'Admin', transaction:'2', rolePermission:'5', description:'Aye Aye', isActive:true, dateTime:'Mon, 08-Jan-2021 09:10:20', 'updateTime': 'Mon, 09-Jan-2021 09:14:18', action:'assets/img/icon/Edit.svg'},

  {profile: 'assets/img/user_images/profile.png', name: 'Hla Hla', companyName: 'CGM', department: 'Admin Department', designation: 'Branch Manager', mobile: '+95 09251576586', type:'Admin', transaction:'3', rolePermission:'1', description:'Hla Hla', isActive:false, dateTime:'Tue, 09-Jan-2021 10:11:25', 'updateTime': 'Mon, 09-Jan-2021 09:14:18', action:'assets/img/icon/Edit.svg'},

  {profile: 'assets/img/user_images/profile.png', name: 'Aung Aung', companyName: 'CGM', department: 'Sales Department', designation: 'Sales Person', mobile: '+95 09798845585', type:'User', transaction:'4', rolePermission:'2', description:'Aung Aung', isActive:true, dateTime:'Wed, 10-Jan-2021 09:14:18', 'updateTime': 'Mon, 09-Jan-2021 09:14:18', action:'assets/img/icon/Edit.svg'},

  {profile: 'assets/img/user_images/profile.png', name: 'Mya Mya', companyName: 'CGM', department: 'Sales Department', designation: 'Sales Person', mobile: '+95 09915765555', type:'User', transaction:'5', rolePermission:'3', description:'Mya Mya', isActive:true, dateTime:'Thur, 11-Jan-2021 11:15:28', 'updateTime': 'Mon, 09-Jan-2021 09:14:18', action:'assets/img/icon/Edit.svg'},

  {profile: 'assets/img/user_images/profile.png', name: 'Maung Maung', companyName: 'CGM', department: 'Sales Department', designation: 'Branch Manager', mobile: '+95 09251576586', type:'Admin', transaction:'1', rolePermission:'2', description:'Maung Maung', isActive:false, dateTime:'Fri, 12-Jan-2021 10:18:24', 'updateTime': 'Mon, 09-Jan-2021 09:14:18', action:'assets/img/icon/Edit.svg'},

  {profile: 'assets/img/user_images/profile.png', name: 'Aye Aye', companyName: 'CGM', department: 'Account Department', designation: 'Accoutant', mobile: '+95 09421056929', type:'Admin', transaction:'2', rolePermission:'5', description:'Aye Aye', isActive:true, dateTime:'Mon, 08-Jan-2021 09:10:20', 'updateTime': 'Mon, 09-Jan-2021 09:14:18', action:'assets/img/icon/Edit.svg'},

  {profile: 'assets/img/user_images/profile.png', name: 'Hla Hla', companyName: 'CGM', department: 'Admin Department', designation: 'Branch Manager', mobile: '+95 09251576586', type:'Admin', transaction:'3', rolePermission:'1', description:'Hla Hla', isActive:false, dateTime:'Tue, 09-Jan-2021 10:11:25', 'updateTime': 'Mon, 09-Jan-2021 09:14:18', action:'assets/img/icon/Edit.svg'},

  {profile: 'assets/img/user_images/profile.png', name: 'Aung Aung', companyName: 'CGM', department: 'Sales Department', designation: 'Sales Person', mobile: '+95 09798845585', type:'User', transaction:'4', rolePermission:'2', description:'Aung Aung', isActive:true, dateTime:'Wed, 10-Jan-2021 09:14:18', 'updateTime': 'Mon, 09-Jan-2021 09:14:18', action:'assets/img/icon/Edit.svg'},

  {profile: 'assets/img/user_images/profile.png', name: 'Mya Mya', companyName: 'CGM', department: 'Sales Department', designation: 'Sales Person', mobile: '+95 09915765555', type:'User', transaction:'5', rolePermission:'3', description:'Mya Mya', isActive:true, dateTime:'Thur, 11-Jan-2021 11:15:28', 'updateTime': 'Mon, 09-Jan-2021 09:14:18', action:'assets/img/icon/Edit.svg'},

  {profile: 'assets/img/user_images/profile-pic.jpg', name: 'Aye Aye', companyName: 'CGM', department: 'Account Department', designation: 'Accoutant', mobile: '+95 09421056929', type:'Admin', transaction:'2', rolePermission:'5', description:'Aye Aye', isActive:true, dateTime:'Mon, 08-Jan-2021 09:10:20', 'updateTime': 'Mon, 09-Jan-2021 09:14:18', action:'assets/img/icon/Edit.svg'},

  {profile: 'assets/img/user_images/profile.png', name: 'Hla Hla', companyName: 'CGM', department: 'Admin Department', designation: 'Branch Manager', mobile: '+95 09251576586', type:'Admin', transaction:'3', rolePermission:'1', description:'Hla Hla', isActive:true, dateTime:'Tue, 09-Jan-2021 10:11:25', 'updateTime': 'Mon, 09-Jan-2021 09:14:18', action:'assets/img/icon/Edit.svg'},

  {profile: 'assets/img/user_images/profile-pic.jpg', name: 'Aung Aung', companyName: 'CGM', department: 'Sales Department', designation: 'Sales Person', mobile: '+95 09798845585', type:'User', transaction:'4', rolePermission:'2', description:'Aung Aung', isActive:false, dateTime:'Wed, 10-Jan-2021 09:14:18', 'updateTime': 'Mon, 09-Jan-2021 09:14:18', action:'assets/img/icon/Edit.svg'},

  {profile: 'assets/img/user_images/profile.png', name: 'Mya Mya', companyName: 'CGM', department: 'Sales Department', designation: 'Sales Person', mobile: '+95 09915765555', type:'User', transaction:'5', rolePermission:'3', description:'Mya Mya', isActive:true, dateTime:'Thur, 11-Jan-2021 11:15:28', 'updateTime': 'Mon, 09-Jan-2021 09:14:18', action:'assets/img/icon/Edit.svg'},

  {profile: 'assets/img/user_images/profile.png', name: 'Aye Aye', companyName: 'CGM', department: 'Account Department', designation: 'Accoutant', mobile: '+95 09421056929', type:'Admin', transaction:'2', rolePermission:'5', description:'Aye Aye', isActive:true, dateTime:'Mon, 08-Jan-2021 09:10:20', 'updateTime': 'Mon, 09-Jan-2021 09:14:18', action:'assets/img/icon/Edit.svg'},

  {profile: 'assets/img/user_images/profile.png', name: 'Hla Hla', companyName: 'CGM', department: 'Admin Department', designation: 'Branch Manager', mobile: '+95 09251576586', type:'Admin', transaction:'3', rolePermission:'1', description:'Hla Hla', isActive:true, dateTime:'Tue, 09-Jan-2021 10:11:25', 'updateTime': 'Mon, 09-Jan-2021 09:14:18', action:'assets/img/icon/Edit.svg'},

  {profile: 'assets/img/user_images/profile.png', name: 'Aung Aung', companyName: 'CGM', department: 'Sales Department', designation: 'Sales Person', mobile: '+95 09798845585', type:'User', transaction:'4', rolePermission:'2', description:'Aung Aung', isActive:true, dateTime:'Wed, 10-Jan-2021 09:14:18', 'updateTime': 'Mon, 09-Jan-2021 09:14:18', action:'assets/img/icon/Edit.svg'},

  {profile: 'assets/img/user_images/profile.png', name: 'Mya Mya', companyName: 'CGM', department: 'Sales Department', designation: 'Sales Person', mobile: '+95 09915765555', type:'User', transaction:'5', rolePermission:'3', description:'Mya Mya', isActive:true, dateTime:'Thur, 11-Jan-2021 11:15:28', 'updateTime': 'Mon, 09-Jan-2021 09:14:18', action:'assets/img/icon/Edit.svg'},

  {profile: 'assets/img/user_images/profile-pic.jpg', name: 'Aye Aye', companyName: 'CGM', department: 'Account Department', designation: 'Accoutant', mobile: '+95 09421056929', type:'Admin', transaction:'2', rolePermission:'5', description:'Aye Aye', isActive:false, dateTime:'Mon, 08-Jan-2021 09:10:20', 'updateTime': 'Mon, 09-Jan-2021 09:14:18', action:'assets/img/icon/Edit.svg'},

  {profile: 'assets/img/user_images/profile.png', name: 'Hla Hla', companyName: 'CGM', department: 'Admin Department', designation: 'Branch Manager', mobile: '+95 09251576586', type:'Admin', transaction:'3', rolePermission:'1', description:'Hla Hla', isActive:true, dateTime:'Tue, 09-Jan-2021 10:11:25', 'updateTime': 'Mon, 09-Jan-2021 09:14:18', action:'assets/img/icon/Edit.svg'},

  {profile: 'assets/img/user_images/profile-pic.jpg', name: 'Aung Aung', companyName: 'CGM', department: 'Sales Department', designation: 'Sales Person', mobile: '+95 09798845585', type:'User', transaction:'4', rolePermission:'2', description:'Aung Aung', isActive:true, dateTime:'Wed, 10-Jan-2021 09:14:18', 'updateTime': 'Mon, 09-Jan-2021 09:14:18', action:'assets/img/icon/Edit.svg'},

  {profile: 'assets/img/user_images/profile.png', name: 'Mya Mya', companyName: 'CGM', department: 'Sales Department', designation: 'Sales Person', mobile: '+95 09915765555', type:'User', transaction:'5', rolePermission:'3', description:'Mya Mya', isActive:true, dateTime:'Thur, 11-Jan-2021 11:15:28', 'updateTime': 'Mon, 09-Jan-2021 09:14:18', action:'assets/img/icon/Edit.svg'},

  {profile: 'assets/img/user_images/profile-pic.jpg', name: 'Aye Aye', companyName: 'CGM', department: 'Account Department', designation: 'Accoutant', mobile: '+95 09421056929', type:'Admin', transaction:'2', rolePermission:'5', description:'Aye Aye', isActive:true, dateTime:'Mon, 08-Jan-2021 09:10:20', 'updateTime': 'Mon, 09-Jan-2021 09:14:18', action:'assets/img/icon/Edit.svg'},

  {profile: 'assets/img/user_images/profile.png', name: 'Hla Hla', companyName: 'CGM', department: 'Admin Department', designation: 'Branch Manager', mobile: '+95 09251576586', type:'Admin', transaction:'3', rolePermission:'1', description:'Hla Hla', isActive:true, dateTime:'Tue, 09-Jan-2021 10:11:25', 'updateTime': 'Mon, 09-Jan-2021 09:14:18', action:'assets/img/icon/Edit.svg'},

  {profile: 'assets/img/user_images/profile-pic.jpg', name: 'Aung Aung', companyName: 'CGM', department: 'Sales Department', designation: 'Sales Person', mobile: '+95 09798845585', type:'User', transaction:'4', rolePermission:'2', description:'Aung Aung', isActive:true, dateTime:'Wed, 10-Jan-2021 09:14:18', 'updateTime': 'Mon, 09-Jan-2021 09:14:18', action:'assets/img/icon/Edit.svg'},

  {profile: 'assets/img/user_images/profile.png', name: 'Mya Mya', companyName: 'CGM', department: 'Sales Department', designation: 'Sales Person', mobile: '+95 09915765555', type:'User', transaction:'5', rolePermission:'3', description:'Mya Mya', isActive:true, dateTime:'Thur, 11-Jan-2021 11:15:28', 'updateTime': 'Mon, 09-Jan-2021 09:14:18', action:'assets/img/icon/Edit.svg'},

];


