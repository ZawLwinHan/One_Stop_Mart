import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router,Event, NavigationEnd } from '@angular/router';
import { ConfirmAlertComponent } from 'src/app/components/modal/confirm-alert/confirm-alert.component';
import { Location } from '@angular/common';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})

export class LogoutComponent implements OnInit {

  constructor(public router: Router,public dialog: MatDialog,private location: Location) { }

  ngOnInit(): void {
    this.logout();
  }

  logout(){
    const dialogRef = this.dialog.open(ConfirmAlertComponent, {
      width: '550px',
      data: {
        message: 'Do you want to logout?',
        confirmButtonText: 'YES',
        cancelButtonText: 'NO',
        image: 'assets/img/Icon/Search.svg'  
      }
      });

      dialogRef.afterClosed().subscribe(result => {
        if(result) {
          this.router.navigate(['../auth/login']);
        }
        else {
          this.location.back()
        }
    });
  }
}

