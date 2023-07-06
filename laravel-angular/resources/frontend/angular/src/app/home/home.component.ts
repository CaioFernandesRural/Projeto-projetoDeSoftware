import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private usuarioService: UsuariosService) { }

  usuarios: any;

  ngOnInit(): void {
    this.showUsuarios();
  }

  showUsuarios() {
    this.usuarios = this.usuarioService.listarUsuarios().subscribe((usuario: any) =>{
      this.usuarios = usuario;
      console.log(this.usuarios);
    })
  }

}
