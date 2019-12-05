import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaixaDeEntradaComponent } from './caixa-de-entrada.component';
import { FormsModule } from '@angular/forms'
import { SharedComponentModule } from 'src/app/components/shared-components.module';
import { CaixaDeEntradaRoutingModule} from './caixa-de-entrada-routing.module'
import { HttpClientModule } from '@angular/common/http'
import { EmailService } from 'src/app/services/email.service';

@NgModule({
  declarations: [CaixaDeEntradaComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedComponentModule,
    CaixaDeEntradaRoutingModule,
    HttpClientModule
  ],
  providers: [
    EmailService
  ]
})
export class CaixaDeEntradaModule { }
