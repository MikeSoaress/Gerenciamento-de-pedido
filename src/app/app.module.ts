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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    MenuLateralComponent,
    CarregandoComponent,
    AvisoComponent,
    ConfirmacaoComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
