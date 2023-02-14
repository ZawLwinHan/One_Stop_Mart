import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-transaction-amount',
  templateUrl: './edit-transaction-amount.component.html',
  styleUrls: ['./edit-transaction-amount.component.scss']
})
export class EditTransactionAmountComponent implements OnInit {
  selectedCounter: any|string;

  counters = [
    {value:'All Counter', viewValue : 'All Counter'},
    {value:'Specific Counter', viewValue : 'Specific Counter'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
