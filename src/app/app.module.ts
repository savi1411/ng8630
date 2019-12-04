import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
// Importação e referência ao HeaderComponent
import { HeaderComponent } from './components/header/header.component';
// Importação e referência dos demais componentes
import { CaixaDeEntradaComponent } from './modules/caixa-de-entrada/caixa-de-entrada.component';
import { LoginComponent } from './modules/login/login.component';
import { CadastroComponent } from './modules/cadastro/cadastro.component';
// Importação e Referência do Módulo de Roteamento
import { ModuloRoteamento } from './app.routes';
import { CmailFormGroupComponent } from './components/cmail-form-group/cmail-form-group.component';
import { cmailFormFieldDirective } from './components/cmail-form-group/cmail-form-field.directive';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CaixaDeEntradaComponent,
    LoginComponent,
    CadastroComponent,
    CmailFormGroupComponent,
    cmailFormFieldDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ModuloRoteamento,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
