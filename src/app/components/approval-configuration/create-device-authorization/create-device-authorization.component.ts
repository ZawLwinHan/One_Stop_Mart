import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-device-authorization',
  templateUrl: './create-device-authorization.component.html',
  styleUrls: ['./create-device-authorization.component.scss']
})
export class CreateDeviceAuthorizationComponent implements OnInit {
  selectedCounter: any|string;

  counters = [
    {value:'All Counter', viewValue : 'All Counter'},
    {value:'Specific Counter', viewValue : 'Specific Counter'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
