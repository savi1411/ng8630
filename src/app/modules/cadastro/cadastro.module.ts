import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CadastroComponent } from './cadastro.component';
// import { CmailFormGroupComponent } from 'src/app/components/cmail-form-group/cmail-form-group.component';
// import { CmailFormFieldDirective } from 'src/app/components/cmail-form-group/cmail-form-field.directive';
import { HttpClientModule } from '@angular/common/http';
import { SharedComponentModule } from 'src/app/components/shared-components.module';
import { CadastroRoutingModule } from './cadastro-routing.module';

@NgModule({
  declarations: [
    CadastroComponent,
    // Movido para sharedModule (não está na apostila)
    // CmailFormGroupComponent,
    // CmailFormFieldDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedComponentModule,
    CadastroRoutingModule
  ]
})
export class CadastroModule { }
