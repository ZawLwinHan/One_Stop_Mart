import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-transaction-amount',
  templateUrl: './create-transaction-amount.component.html',
  styleUrls: ['./create-transaction-amount.component.scss']
})
export class CreateTransactionAmountComponent implements OnInit {
  selectedCounter: any|string;

  counters = [
    {value:'All Counter', viewValue : 'All Counter'},
    {value:'Specific Counter', viewValue : 'Specific Counter'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
