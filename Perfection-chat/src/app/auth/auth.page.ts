import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators, } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  title = 'email-of-company';
  userEmail = new FormGroup({
    companyEmail: new FormControl('', [
      Validators.required,
      Validators.pattern('@teams.ru'),
    ]),
  });

  @ViewChild('form') form: NgForm;
  submissionType: 'login' | 'join' = 'login';

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    const { email, password } = this.form.value;
    const sub_of_email = '@teams.ru';
    if (!email || !password) return;

    if (this.submissionType === 'login') {
      console.log(1, 'handle login', email, password);
      if (!email.includes(sub_of_email)) {
        console.log(5, 'Неверный формат электронной почты!');
      }
    } else if (this.submissionType === 'join') {
      const { firstName, lastName, middleName } = this.form.value;
      if (!firstName || !lastName || !middleName) return;
      console.log(
        2,
        'handle join',
        email,
        password,
        firstName,
        lastName,
        middleName
      );
      if (!email.includes(sub_of_email)) {
        console.log(5, 'Неверный формат электронной почты!');
      }
    }
  }

  toggleText() {
    if (this.submissionType === 'login') {
      this.submissionType = 'join';
    } else if (this.submissionType === 'join') {
      this.submissionType = 'login';
    }
  }
}
