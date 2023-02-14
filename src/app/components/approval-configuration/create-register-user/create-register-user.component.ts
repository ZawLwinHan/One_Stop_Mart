import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-create-register-user',
  templateUrl: './create-register-user.component.html',
  styleUrls: ['./create-register-user.component.scss']
})
export class CreateRegisterUserComponent implements OnInit {

  toppings = new FormControl('');

  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  constructor() { }

  ngOnInit(): void {
  }


}
