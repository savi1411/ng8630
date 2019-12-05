import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-caixa-de-entrada',
  templateUrl: './caixa-de-entrada.component.html',
  styleUrls: ['./caixa-de-entrada.component.css']
})
export class CaixaDeEntradaComponent implements OnInit {

  constructor(private emailService: EmailService) { }

  ngOnInit() {
    this.emailService
      .listar()
      .subscribe(
        lista => {
          this.emailList = lista
        }
      )
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

    // this.emailList.push(this.email); código anterior
    this.emailService
      .enviar(this.email)
      .subscribe(
        emailApi => {
          // Fazemos todas as outras operações após o OK da API
          this.emailList.push(this.email)
          this.eraseForm();
          formEmail.reset();
        },
        erro => {
          console.error(erro)
          alert("Ocorreu um erro ao gravar o e-mail: " + erro)
        }
      )  
  }

  handleRemoveEmail(eventoVaiRemover, emailId) {
    console.log(eventoVaiRemover)
    if(eventoVaiRemover.status === 'removing') {
      // O próximo passo é apagar do backend!
      this.emailService
        .deletar(emailId)
        .subscribe(
          res => {
            console.log(res)
            // Remove o email da lista de emais, depois de ser apagado do back-end
            this.emailList = this.emailList.filter(email => email.id != emailId)
          },
          err => console.error(err)
        )
    }
  }

  eraseForm() {
    this.email = {
      destinatario: '',
      assunto: '',
      conteudo: ''
    }
  }

}
