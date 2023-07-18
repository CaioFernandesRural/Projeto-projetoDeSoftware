import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from '../services/usuarios.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cadastro-user',
  templateUrl: './cadastro-user.component.html',
  styleUrls: ['./cadastro-user.component.css']
})
export class CadastroUserComponent implements OnInit {

  registerForm!: FormGroup;
  submitted = false;
  userData: any;

  constructor(private formBuilder: FormBuilder, private usuariosService: UsuariosService, private toastr: ToastrService) { }

  initializeRegisterForm() {
    this.registerForm = this.formBuilder.group({
      nome: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      telefone: ['', [Validators.required]],
      idade: [null, [Validators.required]],
      sexo: ['Selecione...', [Validators.required]],
      cidade: ['', [Validators.required]],
      estado: ['Selecione...', [Validators.required]],
      bio: ['', [Validators.required]],
      admin: [false, [Validators.required]],
      passwordConfirm: ['', [Validators.required]]
    }, {
      validator: this.mustMatch('password', 'passwordConfirm')
    });
  }

  //Função para confirmar senha
  mustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
        return;
      }

      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null)
      }
    };
  }

  ngOnInit(): void {
    this.initializeRegisterForm();
  }

  get f() { return this.registerForm.controls; }

  submit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }

    this.usuariosService.registerUser(this.registerForm.value).subscribe(res => {
      this.userData = res;
      
      if(this.userData.status === 1) {
        this.toastr.success(JSON.stringify(this.userData.message), JSON.stringify(this.userData.code), {
          timeOut: 2000,
          progressBar: true
        })
      } else {
        this.toastr.error(JSON.stringify(this.userData.message), JSON.stringify(this.userData.code), {
          timeOut: 2000,
          progressBar: true
        })
      }
      this.submitted = false;
      this.registerForm.get('nome')?.reset();
      this.registerForm.get('email')?.reset();
      this.registerForm.get('password')?.reset();
      this.registerForm.get('telefone')?.reset();
      this.registerForm.get('idade')?.reset();
      this.registerForm.get('sexo')?.setValue('Selecione...');
      this.registerForm.get('cidade')?.reset();
      this.registerForm.get('estado')?.setValue('Selecione...');
      this.registerForm.get('bio')?.reset();
      this.registerForm.get('passwordConfirm')?.reset();
    })
  }


}
