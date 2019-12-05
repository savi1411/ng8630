import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { CmailFormGroupComponent } from './cmail-form-group/cmail-form-group.component';
import { CmailFormFieldDirective } from './cmail-form-group/cmail-form-field.directive';
import { CmailListItemComponent } from './cmail-list-item/cmail-list-item.component';

@NgModule({
  declarations: [
    HeaderComponent,
    // não está na apostila
    CmailFormGroupComponent,
    CmailFormFieldDirective,
    CmailListItemComponent  // CLI já declarou
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent,
    // não está na apostila
    CmailFormGroupComponent,
    CmailFormFieldDirective,
    CmailListItemComponent  // Deve ser exportado
  ]
})
export class SharedComponentModule { }
