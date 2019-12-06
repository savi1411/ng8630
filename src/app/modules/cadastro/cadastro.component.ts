import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpResponseBase, HttpErrorResponse } from '@angular/common/http'
import { map, catchError } from 'rxjs/operators'
import { VERSION } from '@angular/core';
import { User } from 'src/app/model/user';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment'
import { PageService } from 'src/app/services/page.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  mensagensErro: String = '';

  formCadastro = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    // username: new FormControl('', [Validators.required, Validators.email]),
    // Removemos a linha acima pois o back-end espera apenas o username (sem formato de e-mail)
    username: new FormControl('', [Validators.required]),
    senha: new FormControl('', [Validators.required, Validators.minLength(8)]),
    telefone: new FormControl('', [Validators.required, Validators.pattern('[0-9]{4}-?[0-9]{4}[0-9]?')]),
    avatar: new FormControl('', [Validators.required], this.validaImagem.bind(this))
  })

  constructor(private httpClient: HttpClient
    , private roteador: Router
    , private pageService: PageService) { }

  ngOnInit() {
    // Define o título da página
    this.pageService
      .defineTitulo('Cadastro - Cmail')
  }

  handleCadastrarUsuario() {
    if (this.formCadastro.valid) {

      const userData = new User(this.formCadastro.value);
      const apiUrl = `${environment.apiUrl}users/`

      this.httpClient
        .post(apiUrl, userData)
        .subscribe(
          () => {
            console.log('cadastrado com sucesso')
            this.eraseForm()

            // Após 1 segundo, envia para a tela de Login
            setTimeout(() => {
              this.roteador.navigate(['']);
            }, 1000);
          }
          , (responseError: HttpErrorResponse) => {
            // reposta caso existam erros
            this.mensagensErro = responseError.error.body
          }
        )
    } else {
      this.validarTodosOsCamposDoFormulario(this.formCadastro)
    }
  }

  // Getters para uso no template
  get nomeUsr() { return this.formCadastro.get('nome') }
  get usernameUsr() { return this.formCadastro.get('username') }
  get senhaUsr() { return this.formCadastro.get('senha') }
  get telefoneUsr() { return this.formCadastro.get('telefone') }
  get avatarUsr() { return this.formCadastro.get('avatar') }

  validaImagem(campoDoFormulario: FormControl) {
    return this.httpClient
      .head(campoDoFormulario.value, {
        observe: 'response'
      })
      .pipe(
        map((response: HttpResponseBase) => {
          return response.ok ? null : { urlInvalida: true }
        }),
        catchError((error) => {
          return [{ urlInvalida: true }]
        })
      )
  }

  eraseForm() {
    this.formCadastro.reset();
  }

  validarTodosOsCamposDoFormulario(form: FormGroup) {
    // Utiliza método conforme vs do Angular
    if (Number(VERSION.minor) >= 8) {
      // Angular 8+
      form.markAllAsTouched();
    } else {
      // Angular 7-
      Object.keys(form.controls).forEach(field => {
        const control = form.get(field);
        control.markAsTouched({ onlySelf: true });
      })
    }
  }

}
