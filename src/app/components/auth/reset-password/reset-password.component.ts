import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  password: any;
  show = false;


  showPassword = false;
  login_form!: FormGroup;
  hide = true;
  constructor( private route: Router,private _formBuilder: FormBuilder, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.login_form = this._formBuilder.group({
      user_name: ["", Validators.required],
      password: ["", Validators.required],
    });
    this.password = 'password';
  }

  login(){
    // if (this.login_form.invalid) {
    //   this._snackBar.open('Username and Password required', 'Ok', {
    //     duration: 3000,
    //   })
    // }
    // else {
    //   this.route.navigate(['/admin/dashboard']);
    // }
  }

  forgotPassword(){
    this.route.navigate(['/login/forgotPassword']);
  }

  onClick() {
    if (this.password === 'password') {
      this.password = 'text';
      this.show = true;
    } else {
      this.password = 'password';
      this.show = false;
    }
  }
}

