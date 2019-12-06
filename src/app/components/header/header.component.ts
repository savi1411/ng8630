import { Component } from '@angular/core';
import { PageService } from 'src/app/services/page.service';
import { HeaderService } from 'src/app/services/header.service';

@Component({
    selector: 'cmail-header',
    templateUrl: './header.component.html',
    styleUrls: [
        './header.component.css',
        './header-search.css'
    ]
})
export class HeaderComponent {

    // Título da página
    tituloDaPagina = 'Cmail'

    // Injeção do PageService
    constructor(private pageService: PageService
                ,private headerService: HeaderService) {

        // Assinando título da PageService
        this.pageService
            .titulo
            .subscribe(novoTitulo => this.tituloDaPagina = novoTitulo)
    }

    private _isMenuOpen = false

    get isMenuOpen() {
        return this._isMenuOpen
    }

    toggleMenu() {
        this._isMenuOpen = !this._isMenuOpen
    }

    logout() {
        localStorage.removeItem("TOKEN")
    }

    handleBuscaChanges({ target }) {
        console.log(target.value)
        this.headerService.atualizaTermoFiltro(target.value)
    }
}

