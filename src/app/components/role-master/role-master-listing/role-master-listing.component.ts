import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-role-master-listing',
  templateUrl: './role-master-listing.component.html',
  styleUrls: ['./role-master-listing.component.scss'],
})
export class RoleMasterListingComponent implements OnInit {
  showEdit: boolean = false;
  select: boolean = true;

  displayedColumns: string[] = [
    'select',
    'companyName',
    'roleName',
    'isActive',
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
  roleName: string;
  isActive: boolean;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    companyName: 'Internet Wallet Myanmar',
    roleName: 'Sales Department',
    isActive: false,
  },
  {
    companyName: 'Internet Wallet Myanmar',
    roleName: 'Sales Department',
    isActive: false,
  },
  {
    companyName: 'Internet Wallet Myanmar',
    roleName: 'Sales Department',
    isActive: true,
  },
  {
    companyName: 'Internet Wallet Myanmar',
    roleName: 'Sales Department',
    isActive: true,
  },
  {
    companyName: 'Internet Wallet Myanmar',
    roleName: 'Sales Department',
    isActive: false,
  },
];
