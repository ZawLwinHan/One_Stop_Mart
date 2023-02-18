import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-user-login-otp',
  templateUrl: './user-login-otp.component.html',
  styleUrls: ['./user-login-otp.component.scss']
})
export class UserLoginOtpComponent implements OnInit {
  @Output() otp_cancelEvent = new EventEmitter<any>();
  @Output() otp_submitEvent = new EventEmitter<any>();
  @Input() countDownSeconds!: number;
  timeLeft: number = 10;
  interval: any;
  isTimeUp: boolean = false;
  timeStart : boolean = false;
  showOtpBtn : boolean = true;
  constructor() { }

  startCount(){
    this.showOtpBtn = false
    this.timeStart = true
  }

  ngOnInit(): void {
    this.startTimer();
  }

  otpCancel() {
    this.otp_cancelEvent.emit({});
  }

  otpSubmit(){
    this.otp_submitEvent.emit({});
  }

  resentOtp(){
    this.isTimeUp = !this.isTimeUp;
    this.startTimer();
  }

  startTimer() {
    var time = this.countDownSeconds;
    var initialOffset = 440;
    var i = 1
    var j = this.countDownSeconds;

    /* Need initial run as interval hasn't yet occured... */
    $('.circle_animation').css('stroke-dashoffset', (initialOffset)-(1*(initialOffset/time)));

    var interval = setInterval(() => {
      $('text').text(j - 1);
      if (i == time) {
        this.isTimeUp = !this.isTimeUp;
        clearInterval(interval);
        return;
      }

      $('.circle_animation').css('stroke-dashoffset', initialOffset-((i+1)*(initialOffset/time)));
      i++;
      j--;
    }, 1000);
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

}
