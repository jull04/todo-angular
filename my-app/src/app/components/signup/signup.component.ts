import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  form: FormGroup

  constructor(private auth: AuthService) {}

  // onSubmit() {
  //   this.auth.register(this.form.value).subscribe(
  //     () => this.router.navigate([/login]),
  //     error => console.error(),
  //   )
  // }
}
