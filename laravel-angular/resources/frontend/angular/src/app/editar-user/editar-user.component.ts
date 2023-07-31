import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-editar-user',
  templateUrl: './editar-user.component.html',
  styleUrls: ['./editar-user.component.css']
})
export class EditarUserComponent implements OnInit {

  updateForm!: FormGroup;
  submitted = false;
  userData: any;
  idUser: any;
  nome: any;
  email: any;
  telefone: any;
  idade: any;
  sexo: any;
  cidade: any;
  estado: any;
  bio: any;

  constructor (private router: Router, private formBuilder: FormBuilder, private usuariosService: UsuariosService, private toastr: ToastrService, private route: ActivatedRoute) { }

  initializeUpdateForm() {
    this.updateForm = this.formBuilder.group({
      nome: [''],
      email: [''],
      telefone: [''],
      idade: [null],
      sexo: ['Selecione...'],
      cidade: [''],
      estado: ['Selecione...'],
      bio: [''],
    })
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idUser = params.get('idUser');
      this.idUser = idUser;
    });
    
    this.initializeUpdateForm();
  }

  get f() { return this.updateForm.controls; }

  submit() {
    this.submitted = true;
    for (const field in this.updateForm.controls) {
      if (this.updateForm.controls[field].invalid) {
        console.log(`Validation error for field ${field}:`, this.updateForm.controls[field].errors);
      }
    }
  
    const dados = {
      nome: this.nome,
      email: this.email,
      telefone: this.telefone,
      idade: this.idade,
      sexo: this.sexo,
      cidade: this.cidade,
      estado: this.estado,
      bio: this.bio
    }
  
    this.usuariosService.updateUser(this.idUser, dados).subscribe(
      (res: any) => {
        this.userData = res;
        if (this.userData.status === 1) {
          this.toastr.success(JSON.stringify(this.userData.message), JSON.stringify(this.userData.code), {
            timeOut: 2000,
            progressBar: true
          })
          console.log(dados)
          // Update the form values with the new data
          this.updateForm.patchValue({
            nome: dados.nome,
            email: dados.email,
            telefone: dados.telefone,
            idade: dados.idade,
            sexo: dados.sexo,
            cidade: dados.cidade,
            estado: dados.estado,
            bio: dados.bio
          });
          // Navigate back to the profile page
          this.router.navigate(['/perfil-user']);
        } else {
          this.toastr.error(JSON.stringify(this.userData.message), JSON.stringify(this.userData.code), {
            timeOut: 2000,
            progressBar: true
          })
        }
        this.submitted = false;
      })
  }
  
}
