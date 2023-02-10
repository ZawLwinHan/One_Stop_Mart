import { AfterViewInit, Component, ViewChild, ViewEncapsulation  } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { UserRolePermissionFilterComponent } from 'src/app/components/modal/user-role-permission-filter/user-role-permission-filter.component';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import { MatDialog } from '@angular/material/dialog';
import { RouterLinkActive } from '@angular/router';
import { active } from 'd3';

@Component({
  selector: 'app-shop-master-listing',
  templateUrl: './shop-master-listing.component.html',
  styleUrls: ['./shop-master-listing.component.scss']
})
export class ShopMasterListingComponent  implements AfterViewInit {

  // constructor(public dialog: MatDialog) {}
  // // openDialog() {
  // //   this.dialog.open(UserRolePermissionFilterComponent, {
  // //     width: '900px',
  // //     data: {}
  // //   });
  // }

  // openDialog() {
  //   const dialogRef = this.dialog.open(UserRolePermissionFilterComponent);

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }

  displayedColumns: string[] = ['select', 'companyName', 'shopCode', 'shopName', 'contactNumber',
    'township', 'noOfcounter', 'totalUser', 'isActive', 'dateTime', 'updateTime',
    'createdUser', 'updatedUser'];

  selection = new SelectionModel<PeriodicElement>(true, []);

  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    RouterLinkActive
    this.dataSource.paginator = this.paginator;
  }

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
  companyName:string;
  shopCode:string;
  shopName:string;
  contactNumber:string;
  township:string;
  noOfcounter:string;
  totalUser:string;
  isActive :boolean;
  dateTime:string;
  updateTime:string;
  createdUser:string;
  updatedUser:string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {companyName: 'Internet Wallet Myanmar', shopCode: '054', shopName: '0054 Myint Thar',contactNumber : '+95 091234343253', township: 'South Okkalapa', noOfcounter:'4', totalUser:'4', isActive:true, dateTime:'Mon, 08-Jan-2021 09:10:20', 'updateTime': 'Mon, 09-Jan-2021 09:14:18', createdUser:'Aung Myo',updatedUser:'Aung Myo'},
  {companyName: 'One Stop Mart Insein', shopCode: '021', shopName: '0021 Shwe Bone Thar',contactNumber : '+95 091234343253', township: 'Papedan', noOfcounter:'4', totalUser:'4', isActive:false, dateTime:'Mon, 08-Jan-2021 09:10:20', 'updateTime': 'Mon, 09-Jan-2021 09:14:18', createdUser:'Shwe Zin',updatedUser:'Ya Min'} 
];


