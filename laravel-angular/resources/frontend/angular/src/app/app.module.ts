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
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { UsuariosService } from './services/usuarios.service';
import { ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redireciona a rota inicial para '/home'
  { path: 'home', component: HomeComponent },
  { path: 'login-user', component: LoginUserComponent},
  { path: 'cadastro-user', component: CadastroUserComponent },
  { path: 'livros', component: LivrosComponent },
  { path: 'livro-anuncio', component: LivroAnuncioComponent },
  { path: 'cadastro-livro-anuncio', component: CadastroLivroAnuncioComponent },
  { path: 'historico-emprestimos', component: HistoricoEmprestimosComponent },
  { path: 'perfil-user', component: PerfilUserComponent },
  { path: 'renovar-emprestimo', component: RenovarEmprestimoComponent },
  { path: 'solicitar-emprestimo', component: SolicitarEmprestimoComponent }
];

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
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule],
  providers: [UsuariosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
