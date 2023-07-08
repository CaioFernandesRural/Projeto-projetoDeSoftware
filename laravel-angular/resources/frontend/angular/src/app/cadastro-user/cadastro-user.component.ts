import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-user',
  templateUrl: './cadastro-user.component.html',
  styleUrls: ['./cadastro-user.component.css']
})
export class CadastroUserComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,) {
    this.registerForm = this.initializeRegisterForm();
  }

  initializeRegisterForm() {
    return this.formBuilder.group({
      nome: [null, Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required, Validators.minLength(6)],
      telefone: ['', Validators.required],
      idade: [0, Validators.required],
      sexo: ['', Validators.required],
      cidade: ['', Validators.required],
      estado: ['', Validators.required],
      bio: ['', Validators.required],
      data_nasc: [null, Validators.required],
      admin: [false, Validators.required],
      passwordConfirm: ['', Validators.required]
    }, {
      validator: this.mustMatch('password', 'passwordConfirm')
    });
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

}
