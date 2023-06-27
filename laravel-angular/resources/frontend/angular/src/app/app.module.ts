import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { CadastroUserComponent } from './cadastro-user/cadastro-user.component';
import { CadastroLivroAnuncioComponent } from './cadastro-livro-anuncio/cadastro-livro-anuncio.component';
import { HistoricoEmprestimosComponent } from './historico-emprestimos/historico-emprestimos.component';
import { LivroAnuncioComponent } from './livro-anuncio/livro-anuncio.component';
import { LivrosComponent } from './livros/livros.component';
import { PerfilUserComponent } from './perfil-user/perfil-user.component';
import { RenovarEmprestimoComponent } from './renovar-emprestimo/renovar-emprestimo.component';
import { SolicitarEmprestimoComponent } from './solicitar-emprestimo/solicitar-emprestimo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginUserComponent,
    CadastroUserComponent,
    CadastroLivroAnuncioComponent,
    HistoricoEmprestimosComponent,
    LivroAnuncioComponent,
    LivrosComponent,
    PerfilUserComponent,
    RenovarEmprestimoComponent,
    SolicitarEmprestimoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
