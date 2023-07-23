import { Component, OnInit } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { AnuncioService } from '../services/anuncio.service';
import { LivroService } from '../services/livro.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-perfil-user',
  templateUrl: './perfil-user.component.html',
  styleUrls: ['./perfil-user.component.css']
})
export class PerfilUserComponent implements OnInit {

  token: any;
  userData: any;
  email: any;
  nome: any;
  cidade: any;
  estado: any;
  bio: any;
  telefone: any;
  id: any;
  fotoPerfil: any;
  anuncios: any[] = [];
  livros: any[] = [];
  imageBase64: any;

  constructor(private anuncioService: AnuncioService, private livroService: LivroService, private http: HttpClient) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.userData = jwt_decode(this.token);
    this.email = this.userData.email;
    this.nome = this.userData.nome;
    this.cidade = this.userData.cidade;
    this.estado = this.userData.estado;
    this.bio = this.userData.bio;
    this.telefone = this.userData.telefone;
    this.id = this.userData.user_id;
    this.fotoPerfil = this.userData.fotoPerfil;
    this.listarAnunciosUser(this.id);
    const filename = this.userData.fotoPerfil; // Substitua pelo nome correto da imagem que você deseja obter

    this.http.get('http://127.0.0.1:8000/storage/' + filename, { responseType: 'blob' })
      .subscribe(response => {
        const reader = new FileReader();
        reader.onload = () => {
          const imageBase64 = reader.result as string;
          // Aqui você pode usar a variável "imageBase64" para exibir a imagem no template do seu componente
        };
        reader.readAsDataURL(response);
     });
  }

  listarAnunciosUser(idDono: number) {
    this.anuncioService.listarAnunciosDono(idDono).subscribe(
      (anuncios: any) => {
        this.anuncios = anuncios;
        this.livros = []; // Criar uma matriz para armazenar os livros de cada anúncio
        for (const anuncio of this.anuncios) {
          const idLivroAnuncio = anuncio.idLivro;
          this.carregarLivroPorId(idLivroAnuncio);
        }
      },
      (error) => {
        console.error('Erro ao listar os anúncios cadastrados:', error);
      }
    )
  }

  carregarLivroPorId(idLivro: number) {
    this.livroService.livroPorId(idLivro).subscribe(
      (livro: any) => {
        this.livros.push(livro); // Adicionar o livro à matriz de livros
      },
      (error) => {
        console.error('Erro ao buscar livro:', error);
      }
    );
  }


}
