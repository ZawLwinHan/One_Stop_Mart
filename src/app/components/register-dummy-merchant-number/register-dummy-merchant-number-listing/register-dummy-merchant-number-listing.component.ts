import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-register-dummy-merchant-number-listing',
  templateUrl: './register-dummy-merchant-number-listing.component.html',
  styleUrls: ['./register-dummy-merchant-number-listing.component.scss'],
})
export class RegisterDummyMerchantNumberListingComponent implements OnInit {
  showEdit:boolean = false;

  select = true;
  displayedColumns: string[] = [
    'select',
    'companyName',
    'dummyMerchantName',
    'dummyMerchantNumber',
    'advanceMerchantNumber',
    'fatherName',
    'businessName',
    'status',
    'isActive',
    'createdDateTime',
    'updatedDateTime',
    'createdUserName',
    'updatedUserName',
  ];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  selection = new SelectionModel<PeriodicElement>(true, []);

  constructor() {}

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
  companyName: string;
  dummyMerchantName: string;
  dummyMerchantNumber: string;
  advanceMerchantNumber: string;
  fatherName: string;
  businessName: string;
  status: string;
  isActive: boolean;
  createdDateTime: string;
  updatedDateTime: string;
  createdUserName: string;
  updatedUserName: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    companyName: 'Internet Wallet Myanmar',
    dummyMerchantName: 'Mobile Payment',
    dummyMerchantNumber: '+95 09808039123',
    advanceMerchantNumber: '+95 0921034139123',
    fatherName: 'U Hla',
    businessName: 'Phone Shop',
    status: 'Checking',
    isActive: false,
    createdDateTime: 'Mon, 08-Jan-2021 09:10:20',
    updatedDateTime: 'Mon, 08-Jan-2021 09:10:20',
    createdUserName: 'Aung Myo',
    updatedUserName: 'Aung Myo',
  },
  {
    companyName: 'One Stop Mart Insein',
    dummyMerchantName: 'SMEDB OK$',
    dummyMerchantNumber: '+95 09808039123',
    advanceMerchantNumber: '+95 0921034139123',
    fatherName: 'U Ye Naing',
    businessName: 'Phone Shop',
    status: 'Checking',
    isActive: false,
    createdDateTime: 'Mon, 08-Jan-2021 09:10:20',
    updatedDateTime: 'Mon, 08-Jan-2021 09:10:20',
    createdUserName: 'Hla Hla',
    updatedUserName: 'Hla Hla',
  },
  {
    companyName: 'Internet Wallet Myanmar',
    dummyMerchantName: 'Mobile Payment',
    dummyMerchantNumber: '+95 09808039123',
    advanceMerchantNumber: '+95 0921034139123',
    fatherName: 'U Mg Mg',
    businessName: 'Online Pyament Shop',
    status: 'Checking',
    isActive: true,
    createdDateTime: 'Mon, 08-Jan-2021 09:10:20',
    updatedDateTime: 'Mon, 08-Jan-2021 09:10:20',
    createdUserName: 'Aung Aung',
    updatedUserName: 'Aung Aung',
  },
  {
    companyName: 'Internet Wallet Myanmar',
    dummyMerchantName: 'Mobile Payment',
    dummyMerchantNumber: '+95 09808039123',
    advanceMerchantNumber: '+95 0921034139123',
    fatherName: 'U Hla',
    businessName: 'Phone Shop',
    status: 'Checking',
    isActive: false,
    createdDateTime: 'Mon, 08-Jan-2021 09:10:20',
    updatedDateTime: 'Mon, 08-Jan-2021 09:10:20',
    createdUserName: 'Aung Myo',
    updatedUserName: 'Aung Myo',
  },
  {
    companyName: 'One Stop Mart Tarmwe',
    dummyMerchantName: 'Mobile Payment',
    dummyMerchantNumber: '+95 09808039123',
    advanceMerchantNumber: '+95 0921034139123',
    fatherName: 'U Si Thu',
    businessName: 'Mobile Payment',
    status: 'Register',
    isActive: true,
    createdDateTime: 'Mon, 08-Jan-2021 09:10:20',
    updatedDateTime: 'Mon, 08-Jan-2021 09:10:20',
    createdUserName: 'Aung Myo',
    updatedUserName: 'Aung Myo',
  },
];
