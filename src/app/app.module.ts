import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuLateralComponent } from './components/menu-lateral/menu-lateral.component';
import { CarregandoComponent } from './components/carregando/carregando.component';
import { AvisoComponent } from './components/aviso/aviso.component';
import { ConfirmacaoComponent } from './components/confirmacao/confirmacao.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { AdicionarUsuarioComponent } from './adicionar-usuario/adicionar-usuario.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    MenuLateralComponent,
    CarregandoComponent,
    AvisoComponent,
    ConfirmacaoComponent,
    UsuarioComponent,
    AdicionarUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
