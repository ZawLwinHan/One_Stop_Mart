import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-register-user',
  templateUrl: './create-register-user.component.html',
  styleUrls: ['./create-register-user.component.scss']
})
export class CreateRegisterUserComponent implements OnInit {
  selectedCounter: any|string;

  counters = [
    {value:'All Counter', viewValue : 'All Counter'},
    {value:'Specific Counter', viewValue : 'Specific Counter'}
  ]

  constructor() { }

  ngOnInit(): void {
  }


}
