import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { CmailFormGroupComponent } from './cmail-form-group/cmail-form-group.component';
import { CmailFormFieldDirective } from './cmail-form-group/cmail-form-field.directive';

@NgModule({
  declarations: [
    HeaderComponent,
    // não está na apostila
    CmailFormGroupComponent,
    CmailFormFieldDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent,
    // não está na apostila
    CmailFormGroupComponent,
    CmailFormFieldDirective
  ]
})
export class SharedComponentModule { }
