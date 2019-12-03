import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { VERSION } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  formCadastro = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    username: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', [Validators.required, Validators.minLength(8)]),
    telefone: new FormControl('', [Validators.required, Validators.pattern('[0-9]{4}-?[0-9]{4}[0-9]?')]),
    avatar: new FormControl(),
  })

  constructor() { }

  ngOnInit() {
  }

  handleCadastrarUsuario() {
    if (this.formCadastro.valid) {
      console.log(this.formCadastro.value)
      this.eraseForm()
    } else {
      this.validarTodosOsCamposDoFormulario(this.formCadastro)
    }
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
