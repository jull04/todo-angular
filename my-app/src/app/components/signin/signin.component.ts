import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent {

  form: FormGroup

  constructor(private auth: AuthService) {}

  onSubmit() {
    this.auth.login(this.form.value).subscribe(
      () => console.log('success'),
      error => console.error(),

    )
  }
}
