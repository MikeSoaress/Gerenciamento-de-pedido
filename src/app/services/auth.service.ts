import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000';
  private token = '';
  avisoCredencialIncorreta = 'Credencial inválida';
  avisoCamposInvalidos = 'Informe Login e Senha para prosseguir';
  urlInicial = '/';

  constructor(private http: HttpClient, private router: Router) { }

  login(username: string, password: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/users`, {params: { username, password} }).pipe(
      tap(response => {
        if (response && response[0]?.token) {
          localStorage.setItem('token', response.token);
        }
      })
    );
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}