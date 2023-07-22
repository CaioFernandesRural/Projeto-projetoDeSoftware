import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnuncioService } from '../services/anuncio.service';
import { LivroService } from '../services/livro.service';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-emprestimo-concedido',
  templateUrl: './emprestimo-concedido.component.html',
  styleUrls: ['./emprestimo-concedido.component.css']
})
export class EmprestimoConcedidoComponent implements OnInit {

  anuncio: any;
  livro: any;
  user: any;

  constructor(private anuncioService: AnuncioService, private route: ActivatedRoute, private livroService: LivroService, private usuarioService: UsuariosService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idAnuncio = params.get('idAnuncio');
      this.carregarAnuncioPorId(idAnuncio);
    });
  }

  carregarAnuncioPorId(idAnuncio: any) {
    this.anuncioService.anuncioPorId(idAnuncio).subscribe(
      (anuncio: any) => {
        this.anuncio = anuncio[0];
        const idLivroAnuncio = this.anuncio.idLivro;
        const idUserAnunciante = this.anuncio.idDono;
        const idUserRequerente = this.anuncio.idRequerente;
        this.carregarLivroPorId(idLivroAnuncio);
        this.carregarUsuarioPorId(idUserRequerente);
      }
    )
  }

  carregarLivroPorId(idLivro: number) {
    this.livroService.livroPorId(idLivro).subscribe(
      (livro: any) => {
        this.livro = livro;
      },
      (error) => {
        console.error('Erro ao buscar livro:', error);
      }
    );
  }

  carregarUsuarioPorId(idUser: number) {
    this.usuarioService.usuarioPorId(idUser).subscribe(
      (user: any) => {
        this.user = user[0];
      },
      (error) => {
        console.error('Erro ao buscar usuário:', error);
      }
    )
  }

}
