import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component'
// import { CmailFormGroupComponent } from 'src/app/components/cmail-form-group/cmail-form-group.component';
// import { CmailFormFieldDirective } from 'src/app/components/cmail-form-group/cmail-form-field.directive';
import { SharedComponentModule } from 'src/app/components/shared-components.module';
import { LoginRoutingModule } from './login-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    LoginComponent,
    // movido para sharedModule (não está na apostila)
    // CmailFormGroupComponent,
    // CmailFormFieldDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    SharedComponentModule,
    LoginRoutingModule,
    // Essencial (não está na apostila)
    FormsModule,
    HttpClientModule
  ]
})
export class LoginModule { }
