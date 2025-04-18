import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormControlName, FormGroup, FormsModule, Validators, } from '@angular/forms';
// import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reacative-form',
  imports: [ReactiveFormsModule,  FormsModule, CommonModule],
  templateUrl: './reacative-form.component.html',
  styleUrl: './reacative-form.component.scss'
})
export class ReacativeFormComponent {

roles = ['Admin', 'User', 'Guest'];

city = ['indore', 'bhopal', 'khandwa', 'khargone'];

signupForm = new FormGroup ({
  username: new FormControl('', [Validators.required, Validators.email]),
  mobileNumber: new FormControl(' '),
  password: new FormControl(''),
  role: new FormControl(' '),
  city: new FormControl(''),
  message: new FormControl(' '),
  textarea: new FormControl('')
})

onSubmit() {
  console.log(this.signupForm.value)
  // alert("signup successfully.....")
}

data = [
  {
    name: 'abc',
    email: 'abc@gmail.com',
    phoneNumber: '34693842038',
    city: 'indore',
    address: 'india'
  },
  {
    name: 'xyz',
    email: 'xyz@gmail.com',
    phoneNumber: '98759834734',
    city: 'indore',
    address: 'india'
  },
  {
    name: 'djfgdj',
    email: 'kdfbjk@gmail.com',
    phoneNumber: '454656554',
    city: 'bhopal',
    address: 'india'
  },
  {
    name: 'kdnbfjks',
    email: 'skdfhied@gmail.com',
    phoneNumber: '38648374938',
    city: 'indore',
    address: 'india'
  }
];
  
}
