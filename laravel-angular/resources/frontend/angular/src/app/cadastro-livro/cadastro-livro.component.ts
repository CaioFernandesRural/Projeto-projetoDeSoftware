import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LivroService } from '../services/livro.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cadastro-livro',
  templateUrl: './cadastro-livro.component.html',
  styleUrls: ['./cadastro-livro.component.css']
})
export class CadastroLivroComponent implements OnInit {

  registerForm!: FormGroup;
  livroData: any;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private livroService: LivroService, private toastr: ToastrService) { }
  
  initializeRegisterForm() {
    this.registerForm = this.formBuilder.group({
      cover: [''],
      titulo: ['', Validators.required],
      autor: ['', Validators.required],
      idioma: ['', Validators.required],
      sinopse: [''],
      editora: [''],
      edicao: [''],
      ano: ['', Validators.minLength(4)],
      numPag: [null, [Validators.required, Validators.min(1)]],
      categoria: ['Selecione...', Validators.required],
      sbn10: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      sbn13: ['', [Validators.required, Validators.minLength(13), Validators.maxLength(13)]]
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

    this.livroService.registrarLivro(this.registerForm.value).subscribe(res => {
      this.livroData = res;

      if(this.livroData.status === 1) {
        this.toastr.success(JSON.stringify(this.livroData.message), JSON.stringify(this.livroData.code), {
          timeOut: 2000,
          progressBar: true
        })
      } else {
        this.toastr.error(JSON.stringify(this.livroData.message), JSON.stringify(this.livroData.code), {
          timeOut: 2000,
          progressBar: true
        })
      }
      this.registerForm.get('cover')?.reset();
      this.registerForm.get('titulo')?.reset();
      this.registerForm.get('autor')?.reset();
      this.registerForm.get('idioma')?.reset();
      this.registerForm.get('sinopse')?.reset();
      this.registerForm.get('editora')?.reset();
      this.registerForm.get('edicao')?.reset();
      this.registerForm.get('ano')?.reset();
      this.registerForm.get('numPag')?.reset();
      this.registerForm.get('categoria')?.setValue('Selecione...');
      this.registerForm.get('sbn10')?.reset();
      this.registerForm.get('sbn13')?.reset();
    })
  }

}
