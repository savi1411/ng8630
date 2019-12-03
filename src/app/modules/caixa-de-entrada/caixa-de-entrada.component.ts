import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-caixa-de-entrada',
  templateUrl: './caixa-de-entrada.component.html',
  styleUrls: ['./caixa-de-entrada.component.css']
})
export class CaixaDeEntradaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private _isNewEmailFormOpen = false;
  emailList = [];

  email = {
    destinatario: '',
    assunto: '',
    conteudo: ''
  }

  get isNewEmailFormOpen() {
    return this._isNewEmailFormOpen;
  }

  toggleNewEmailForm() {
    this._isNewEmailFormOpen = !this._isNewEmailFormOpen;
  }

  handleNewEmail(formEmail: NgForm) {
    // event.preventDefault();

    if(formEmail.invalid) return;

    this.emailList.push(this.email);

    this.eraseForm();

    formEmail.reset();
  
  }

  eraseForm() {
    this.email = {
      destinatario: '',
      assunto: '',
      conteudo: ''
    }
  }

}
