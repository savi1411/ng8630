import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { PageService } from 'src/app/services/page.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mensagensErro: String = '';

  login = {
    email: '',
    password: ''
  }

  constructor(private loginService: LoginService
    , private roteador: Router
    , private pageService: PageService) { }

  ngOnInit() {
    // Define o título da página
    this.pageService
      .defineTitulo('Login - Cmail')
  }

  handleLogin(formLogin: NgForm) {
    if (formLogin.valid) {
      this.loginService
        .logar(this.login)
        .subscribe(
          () => this.roteador.navigate(['/inbox'])
          , (responseError: HttpErrorResponse) => this.mensagensErro = responseError.error
        )
    } else {
      // Não está na apostila
      formLogin.control.markAllAsTouched();
    }
  }

}
