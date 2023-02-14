import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-register-dummy-merchant-number',
  templateUrl: './create-register-dummy-merchant-number.component.html',
  styleUrls: ['./create-register-dummy-merchant-number.component.scss'],
})
export class CreateRegisterDummyMerchantNumberComponent implements OnInit {
  hide: boolean = true;
  constructor() {}

  ngOnInit(): void {}

  reveal() {
    this.hide = !this.hide;
  }
}
