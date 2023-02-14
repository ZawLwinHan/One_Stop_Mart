import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-register-user',
  templateUrl: './edit-register-user.component.html',
  styleUrls: ['./edit-register-user.component.scss']
})
export class EditRegisterUserComponent implements OnInit {
  selectedCounter: any|string;

  counters = [
    {value:'All Counter', viewValue : 'All Counter'},
    {value:'Specific Counter', viewValue : 'Specific Counter'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
