import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  hide : boolean = true
  hide1 : boolean = true
  hide2 : boolean = true


  reveal(){
    this.hide = !this.hide
  }
  reveal1(){
    this.hide1 = !this.hide1
  }
  reveal2(){
    this.hide2 = !this.hide2
  }
}
