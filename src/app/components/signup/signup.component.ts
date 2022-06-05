import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  formSignup!: FormGroup

  user = {
    username: '',
    email: '',
    password: '',
    role: [''],
  };

  constructor(private authService: AuthService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formSignup = this.formBuilder.group({
      username: this.formBuilder.control(null, Validators.required),
      email: this.formBuilder.control(null, Validators.required),
      password: this.formBuilder.control(null, Validators.required),
      role: this.formBuilder.control(null, Validators.required),
    });
  }

  postaUserApi(form: any) {
    this.user.username = form.value.username;
    this.user.email = form.value.email;
    this.user.password = form.value.password;
    this.user.role.splice(0, 1);
    this.user.role.push(form.value.role);

    this.authService.postaUserApi(this.user).subscribe(res => {
      console.log(res);
      this.formSignup.reset
      //this.router.navigate(['/login']);
    });
  }

}
