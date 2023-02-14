import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-device-authorization',
  templateUrl: './edit-device-authorization.component.html',
  styleUrls: ['./edit-device-authorization.component.scss']
})
export class EditDeviceAuthorizationComponent implements OnInit {
  selectedCounter: any|string;

  counters = [
    {value:'All Counter', viewValue : 'All Counter'},
    {value:'Specific Counter', viewValue : 'Specific Counter'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
