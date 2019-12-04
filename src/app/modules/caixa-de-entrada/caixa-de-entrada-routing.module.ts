import { NgModule } from '@angular/core';
import { CaixaDeEntradaComponent } from './caixa-de-entrada.component';
import { Routes, RouterModule } from '@angular/router';

const rotasCaixaDeEntrada: Routes = [
  {path: '', component: CaixaDeEntradaComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(rotasCaixaDeEntrada)
  ],
  exports: [
    RouterModule
  ]
})
export class CaixaDeEntradaRoutingModule { }
