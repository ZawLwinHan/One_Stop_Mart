import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-company-master-listing',
  templateUrl: './company-master-listing.component.html',
  styleUrls: ['./company-master-listing.component.scss'],
})
export class CompanyMasterListingComponent implements OnInit {
  select = true;
  displayedColumns: string[] = [
    'select',
    'companyName',
    'description',
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
  description: string;
  isActive: boolean;
  createdDateTime: string;
  updatedDateTime: string;
  createdUserName: string;
  updatedUserName: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    companyName: 'Internet Wallet Myanmar',
    description: 'Sales Department',
    isActive: false,
    createdDateTime: 'Mon, 08-Jan-2021 09:10:20',
    updatedDateTime: 'Mon, 08-Jan-2021 09:10:20',
    createdUserName: 'Aung Myo',
    updatedUserName: 'Aung Myo',
  },
  {
    companyName: 'Internet Wallet Myanmar',
    description: 'Sales Department',
    isActive: true,
    createdDateTime: 'Mon, 08-Jan-2021 09:10:20',
    updatedDateTime: 'Mon, 08-Jan-2021 09:10:20',
    createdUserName: 'Aung Myo',
    updatedUserName: 'Aung Myo',
  },
  {
    companyName: 'Internet Wallet Myanmar',
    description: 'Sales Department',
    isActive: false,
    createdDateTime: 'Mon, 08-Jan-2021 09:10:20',
    updatedDateTime: 'Mon, 08-Jan-2021 09:10:20',
    createdUserName: 'Aung Myo',
    updatedUserName: 'Aung Myo',
  },
  {
    companyName: 'Internet Wallet Myanmar',
    description: 'Sales Department',
    isActive: false,
    createdDateTime: 'Mon, 08-Jan-2021 09:10:20',
    updatedDateTime: 'Mon, 08-Jan-2021 09:10:20',
    createdUserName: 'Aung Myo',
    updatedUserName: 'Aung Myo',
  },
  {
    companyName: 'Internet Wallet Myanmar',
    description: 'Sales Department',
    isActive: true,
    createdDateTime: 'Mon, 08-Jan-2021 09:10:20',
    updatedDateTime: 'Mon, 08-Jan-2021 09:10:20',
    createdUserName: 'Aung Myo',
    updatedUserName: 'Aung Myo',
  },
  {
    companyName: 'Internet Wallet Myanmar',
    description: 'Sales Department',
    isActive: true,
    createdDateTime: 'Mon, 08-Jan-2021 09:10:20',
    updatedDateTime: 'Mon, 08-Jan-2021 09:10:20',
    createdUserName: 'Aung Myo',
    updatedUserName: 'Aung Myo',
  },
];
