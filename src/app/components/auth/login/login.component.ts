import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  showPassword = false;
  login_form!: FormGroup;
  otp_form!: FormGroup;
  hide = true;
  timeStart : boolean = false;
  otp_page : boolean = false;
  showOtpBtn : boolean = true;
  time : number = 5;

  constructor( private route: Router,private _formBuilder: FormBuilder, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.otp_form = this._formBuilder.group({});
    this.login_form = this._formBuilder.group({
      user_name: ["", Validators.required],
      password: ["", Validators.required],
    });
  }
  startCount(){
    this.showOtpBtn = false
    this.timeStart = true
  }
  login(){
    if (this.login_form.invalid) {
      this._snackBar.open('Username and Password required', 'Ok', {
        duration: 3000,
      })
    }
    else {
      this.route.navigate(['/admin/dashboard']);
    }
  }

  forgotPassword(){
    this.route.navigate(['/login/forgotPassword']);
  }
}
