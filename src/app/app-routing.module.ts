import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

const rotas: Routes = [
    {
        path: 'cadastro',
        loadChildren: () => import('./modules/cadastro/cadastro.module').then(m => m.CadastroModule)
    },
    {
        path: 'login',
        loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
    },
    {
        path: 'inbox',
        loadChildren: () => import('./modules/caixa-de-entrada/caixa-de-entrada.module').then(m => m.CaixaDeEntradaModule)
    },
    {
        path: '',
        redirectTo: 'inbox',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'cadastro',
        pathMatch: 'full'
    }
]
@NgModule({
    imports: [
        // Importou e leu as rotas
        RouterModule.forRoot(rotas)
    ],
    // Exporta módulo configurado
    exports: [RouterModule]
})
export class AppRoutingModule { }
