import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiUrl = `${environment.apiUrl}login/`

  constructor(private http: HttpClient ) { }

  logar(dadosLogin) {
    return this.http
      .post(this.apiUrl, dadosLogin)
      .pipe(
        map((response: any) => {
          localStorage.setItem('TOKEN', response.token);
          return response;
        })
      )
  }
}
