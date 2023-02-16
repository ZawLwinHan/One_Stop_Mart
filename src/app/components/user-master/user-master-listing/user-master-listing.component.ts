import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { UserMasterFilterComponent } from '../../modal/user-master-filter/user-master-filter.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-user-master-listing',
  templateUrl: './user-master-listing.component.html',
  styleUrls: ['./user-master-listing.component.scss'],
})
export class UserMasterListingComponent implements OnInit {
  showEdit: boolean = false;
  select: boolean = true;
  displayedColumns: string[] = [
    'select',
    'profileImg',
    'username',
    'name',
    'mobileNo',
    'companyName',
    'usermail',
    'userType',
    'isActive',
    'createdDateTime',
    'updatedDateTime',
    'createdUserName',
    'updatedUserName',
  ];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  selection = new SelectionModel<PeriodicElement>(true, []);

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(UserMasterFilterComponent, {
      width: '900px',
      data: {},
    });
  }

  ngOnInit(): void {}

  isShow() {
    !this.select;
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
  profileImg: string;
  username: string;
  name: string;
  mobileNo: string;
  companyName: string;
  usermail: string;
  userType: string;
  isActive: boolean;
  createdDateTime: string;
  updatedDateTime: string;
  createdUserName: string;
  updatedUserName: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    profileImg: 'assets/img/user_images/profile-pic.jpg',
    username: 'username001',
    name: 'Aung Myo',
    mobileNo: '+95 094201056021',
    companyName: 'Internet Wallet Myanmar',
    usermail: 'aungmyo123@gmail.com',
    userType: 'Admin',
    isActive: true,
    createdDateTime: 'Mon, 08-Jan-2021 09:10:20',
    updatedDateTime: 'Mon, 09-Jan-2021 09:14:18',
    createdUserName: 'Aung Myo',
    updatedUserName: 'Aung Myo',
  },
  {
    profileImg: 'assets/img/user_images/profile.png',
    username: 'username001',
    name: 'Aung Myo',
    mobileNo: '+95 094201056021',
    companyName: 'Internet Wallet Myanmar',
    usermail: 'aungmyo123@gmail.com',
    userType: 'Admin',
    isActive: false,
    createdDateTime: 'Mon, 08-Jan-2021 09:10:20',
    updatedDateTime: 'Mon, 09-Jan-2021 09:14:18',
    createdUserName: 'Aung Myo',
    updatedUserName: 'Aung Myo',
  },

  {
    profileImg: 'assets/img/user_images/profile.png',
    username: 'username001',
    name: 'Aung Myo',
    mobileNo: '+95 094201056021',
    companyName: 'Internet Wallet Myanmar',
    usermail: 'aungmyo123@gmail.com',
    userType: 'Admin',
    isActive: true,
    createdDateTime: 'Mon, 08-Jan-2021 09:10:20',
    updatedDateTime: 'Mon, 09-Jan-2021 09:14:18',
    createdUserName: 'Aung Myo',
    updatedUserName: 'Aung Myo',
  },

  {
    profileImg: 'assets/img/user_images/profile-pic.jpg',
    username: 'username001',
    name: 'Aung Myo',
    mobileNo: '+95 094201056021',
    companyName: 'Internet Wallet Myanmar',
    usermail: 'aungmyo123@gmail.com',
    userType: 'Admin',
    isActive: false,
    createdDateTime: 'Mon, 08-Jan-2021 09:10:20',
    updatedDateTime: 'Mon, 09-Jan-2021 09:14:18',
    createdUserName: 'Aung Myo',
    updatedUserName: 'Aung Myo',
  },

  {
    profileImg: 'assets/img/user_images/profile-pic.jpg',
    username: 'username001',
    name: 'Aung Myo',
    mobileNo: '+95 094201056021',
    companyName: 'Internet Wallet Myanmar',
    usermail: 'aungmyo123@gmail.com',
    userType: 'Admin',
    isActive: false,
    createdDateTime: 'Mon, 08-Jan-2021 09:10:20',
    updatedDateTime: 'Mon, 09-Jan-2021 09:14:18',
    createdUserName: 'Aung Myo',
    updatedUserName: 'Aung Myo',
  },
];
