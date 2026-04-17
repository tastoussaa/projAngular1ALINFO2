import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent implements OnInit {
  genders = ['female', 'male'];
  signupForm!: FormGroup;

  get username() {
    return this.signupForm.get('username');
  }

  get email() {
    return this.signupForm.get('email');
  }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'username': new FormControl('', [Validators.required, Validators.minLength(5)]),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'gender': new FormControl('female'),
      'userdata': new FormGroup({
        'fb': new FormControl('', Validators.required),
        'age': new FormControl('', Validators.min(18))
      })
    })
  }

}
