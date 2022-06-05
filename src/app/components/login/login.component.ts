import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  userLogin: any;

  datiLogin: any;

  constructor(private authService: AuthService, private router: Router, formLogin: FormBuilder) {
    this.loginForm = formLogin.group({
    username: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z]*'),
      Validators.minLength(4),]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z0-9]*'),
      Validators.minLength(6),
    ])
    })

    }


  ngOnInit(): void {
  }


  loginUserApi(formLogin: {value: any}){
    this.userLogin = formLogin.value;
    this.authService.loginUserApi(this.userLogin).subscribe(rispostaLogin =>{
      this.datiLogin = rispostaLogin;
      console.log(this.datiLogin)
      localStorage.setItem('utentecorrente', JSON.stringify(this.datiLogin))
      this.router.navigate(['/lista-clienti']);
      console.log(rispostaLogin);
      //localStorage.getItem('utentecorrente');
    })
  }

}


