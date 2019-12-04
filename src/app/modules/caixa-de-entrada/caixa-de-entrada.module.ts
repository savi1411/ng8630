import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaixaDeEntradaComponent } from './caixa-de-entrada.component';
import { FormsModule } from '@angular/forms'
import { RouterModule } 

@NgModule({
  declarations: [CaixaDeEntradaComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class CaixaDeEntradaModule { }
