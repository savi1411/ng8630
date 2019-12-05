import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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

  // não está na apostila
  // formCadastro = new FormGroup({
  //   email: new FormControl('', [Validators.required, Validators.minLength(3)]),
  //   senha: new FormControl('', [Validators.required, Validators.minLength(8)]),
  // })

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }  

  handleLogin(formLogin: NgForm){
    if (formLogin.valid) {
      this.httpClient
        .post('http://localhost:3200/login', this.login)
        .subscribe(
          (response: any) => {
            console.log(response)
            console.log('deu certo')
            localStorage.setItem('cmail-token', response.token)
          },
          (responseError: HttpErrorResponse) => {
            // reposta caso existam erros
            console.log(responseError.error)
            this.mensagensErro = responseError.error
          }
        )
    } else {
      // Não está na apostila
      formLogin.control.markAllAsTouched();
    }
  }

}
