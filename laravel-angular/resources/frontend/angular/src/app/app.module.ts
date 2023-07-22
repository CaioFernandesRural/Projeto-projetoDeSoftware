import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { CadastroUserComponent } from './cadastro-user/cadastro-user.component';
import { CadastroLivroComponent } from './cadastro-livro/cadastro-livro.component';
import { LivroAnuncioComponent } from './livro-anuncio/livro-anuncio.component';
import { LivrosComponent } from './livros/livros.component';
import { PerfilUserComponent } from './perfil-user/perfil-user.component';
import { SolicitarEmprestimoComponent } from './solicitar-emprestimo/solicitar-emprestimo.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { UsuariosService } from './services/usuarios.service';
import { ReactiveFormsModule } from '@angular/forms';
import { EmprestimoConcedidoComponent } from './emprestimo-concedido/emprestimo-concedido.component';
import { EmprestimoRequiridoComponent } from './emprestimo-requirido/emprestimo-requirido.component';
import { AvaliacaoComponent } from './avaliacao/avaliacao.component';
import { LivrosUserComponent } from './livros-user/livros-user.component';
import { EmprestimosUserComponent } from './emprestimos-user/emprestimos-user.component';
import { CadastroAnuncioComponent } from './cadastro-anuncio/cadastro-anuncio.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redireciona a rota inicial para '/home'
  { path: 'home', component: HomeComponent },
  { path: 'login-user', component: LoginUserComponent},
  { path: 'cadastro-user', component: CadastroUserComponent },
  { path: 'livros', component: LivrosComponent },
  { path: 'livro-anuncio', component: LivroAnuncioComponent },
  { path: 'cadastro-livro', component: CadastroLivroComponent },
  { path: 'perfil-user', component: PerfilUserComponent },
  { path: 'solicitar-emprestimo', component: SolicitarEmprestimoComponent },
  { path: 'emprestimo-concedido', component: EmprestimoConcedidoComponent },
  { path: 'emprestimo-requerido', component: EmprestimoRequiridoComponent },
  { path: 'avaliacao', component: AvaliacaoComponent },
  { path: 'livros-user', component: LivrosUserComponent },
  { path: 'emprestimos-user', component: EmprestimosUserComponent },
  { path: 'cadastro-anuncio', component: CadastroAnuncioComponent },
  { path: 'livro-anuncio/:idAnuncio', component: LivroAnuncioComponent },
  { path: 'solicitar-emprestimo/:idAnuncio', component: SolicitarEmprestimoComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginUserComponent,
    CadastroUserComponent,
    CadastroLivroComponent,
    LivroAnuncioComponent,
    LivrosComponent,
    PerfilUserComponent,
    SolicitarEmprestimoComponent,
    EmprestimoConcedidoComponent,
    EmprestimoRequiridoComponent,
    AvaliacaoComponent,
    LivrosUserComponent,
    EmprestimosUserComponent,
    CadastroAnuncioComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  exports: [RouterModule],
  providers: [UsuariosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
