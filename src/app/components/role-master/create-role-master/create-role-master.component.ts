import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-role-master',
  templateUrl: './create-role-master.component.html',
  styleUrls: ['./create-role-master.component.scss'],
})
export class CreateRoleMasterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  url = '../../../../assets/img/user_images/profile-pic.jpg';

  onSelectFileUpload(e: any) {
    let inputLabel = document.getElementsByClassName('fileuploadLabel');
    let inputImage = e.target.files[0];
    console.log(inputLabel[0].innerHTML);

    inputLabel[0].innerHTML = inputImage.name;
    if (e.target.files) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        this.url = event.target.result;
      };
    }
  }
}
