import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://localhost:7218/api/Auth';
  private token = '';
  avisoCredencialIncorreta = 'Credencial inválida';
  avisoCamposInvalidos = 'Informe Login e Senha para prosseguir';
  urlInicial = '/';


  constructor(private http: HttpClient, private router: Router) { }

  login(chr_login: string, chr_senha: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { chr_login, chr_senha }).pipe(
      tap(response => {
        if (response && response.token) {
          localStorage.setItem('token', response.token); // Armazena o token no localStorage
        }
      }),
      catchError(error => {
        console.error('Erro no login:', error); // Log do erro para debug
        return throwError(() => new Error('Falha na autenticação.'));
      })
    );
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token'); 
  }

  getToken(): string{
    const token = '' +  localStorage.getItem('token')?.toString();
    return token;
  }
}