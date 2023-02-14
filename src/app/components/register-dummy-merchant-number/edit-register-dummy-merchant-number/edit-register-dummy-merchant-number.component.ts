import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-register-dummy-merchant-number',
  templateUrl: './edit-register-dummy-merchant-number.component.html',
  styleUrls: ['./edit-register-dummy-merchant-number.component.scss'],
})
export class EditRegisterDummyMerchantNumberComponent implements OnInit {
  hide: boolean = true;
  constructor() {}

  ngOnInit(): void {}

  reveal() {
    this.hide = !this.hide;
  }
}
