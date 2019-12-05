import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Email } from '../model/email'
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment'

@Injectable({
    providedIn: 'root'
})
export class EmailService {

    apiUrl = `${environment.apiUrl}emails/`
    cabecalho = new HttpHeaders({ 'Authorization': localStorage.getItem('TOKEN') })

    constructor(private http: HttpClient) { }

    enviar({ destinatario, assunto, conteudo }) {

        const emailParaApi = {
            to: destinatario,
            subject: assunto,
            content: conteudo
        }

        return this.http
            .post(this.apiUrl, emailParaApi, { headers: this.cabecalho })
            .pipe<Email>(
                map(
                    (emailApi: any) => {
                        return new Email({
                            destinatario: emailApi.to,
                            assunto: emailApi.subject,
                            conteudo: emailApi.content,
                            dataDeEnvio: emailApi.created_at,
                            id: emailApi.id // Mapeando o id vindo da API
                        })
                    }
                )
            )
    }

    listar() {
        return this.http
            .get(this.apiUrl, { headers: this.cabecalho })
            .pipe<Email[]>(
                map(
                    (response: any[]) => {
                        return response
                            .map(
                                emailApi => new Email({
                                    destinatario: emailApi.to,
                                    assunto: emailApi.subject,
                                    conteudo: emailApi.content,
                                    dataDeEnvio: emailApi.created_at,
                                    id: emailApi.id
                                })
                            )
                    }
                )
            )
    }

    deletar(id) {
        return this
            .http
            .delete(`${this.apiUrl}${id}`, { headers: this.cabecalho })
    }
}
