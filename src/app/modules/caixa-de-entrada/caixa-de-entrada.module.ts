import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaixaDeEntradaComponent } from './caixa-de-entrada.component';
import { FormsModule } from '@angular/forms'
import { SharedComponentModule } from 'src/app/components/shared-components.module';

@NgModule({
  declarations: [CaixaDeEntradaComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedComponentModule
  ]
})
export class CaixaDeEntradaModule { }
