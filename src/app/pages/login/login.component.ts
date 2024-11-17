import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';
  textoDeAviso: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authService.logout();
  }


  login(): any {
    if (this.camposValidos()) {
      this.authService.login(this.username, this.password).subscribe(
        (response) => {
          if (this.authService.isAuthenticated())
            this.router.navigate(['/']);

          else
            this.textoDeAviso = 'Credenciais de acesso invalidas';
        });
    }

    else
      this.textoDeAviso = 'Preencha os campos corretamente para continuar';
  }

  ocultarAviso() {
    this.textoDeAviso = '';
  }

  camposValidos(): boolean {
    if (this.username != '' && this.password != '')
      return true;

    else return false;
  }

}
