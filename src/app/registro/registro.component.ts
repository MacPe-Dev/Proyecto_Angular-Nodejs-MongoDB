import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {ActivatedRoute, Router} from '@angular/router'
import { ToastrService } from 'ngx-toastr'
// Servicio - Modelo
import { GUsuario } from '../Models/Gusuario'
import { GusuarioService} from '../servicios/gusuarios.service'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit{
  registroForm: FormGroup;
  titulo = 'Registrar Usuario';
  id: string | null;
  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _usuarioService: GusuarioService,
              private aRouter: ActivatedRoute) { 
    this.registroForm = this.fb.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      edad: ['', Validators.required],
      Fnacimiento: ['', Validators.required],
      email: ['', Validators.required],
      telefono: ['', Validators.required],
      foto: ['', Validators.required],
      pass: ['', Validators.required],
      tipo: ['', Validators.required]
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }
  ngOnInit(): void {
    this.esEditar();
  }
  agregarUsuario() {
    const USUARIO: GUsuario = {
      nombre: this.registroForm.get('nombre')?.value,
      apellidos: this.registroForm.get('apellidos')?.value,
      Fnacimiento: this.registroForm.get('Fnacimiento')?.value,
      email: this.registroForm.get('email')?.value,
      telefono: this.registroForm.get('telefono')?.value,
      foto: this.registroForm.get('foto')?.value,
      pass: this.registroForm.get('pass')?.value,
      tipo: this.registroForm.get('tipo')?.value,
    }
    if(this.id !== null){
      // Editamos Usuario
      this._usuarioService.editarUsuario(this.id, USUARIO).subscribe(data =>{
        this.toastr.info('El usuario fue actualizado con exito!', 'Usuario Actualizado!');
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.registroForm.reset();
      })
    } else{
      // Agregamos Usuario
      console.log(USUARIO);
        this._usuarioService.guardarUsuario(USUARIO).subscribe(data => {
        this.toastr.success('El usuario fue registrado con exito!', 'Usuario Registrado!');
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.registroForm.reset();
      })
    }
  }
  esEditar() {
    if(this.id !== null) {
      this.titulo = 'Editar Usuario';
      this._usuarioService.obtenerUsuario(this.id).subscribe(data => {
        this.registroForm.setValue({
          nombre: data.nombre,
          apellidos: data.apellidos,
          Fnacimiento: data.Fnacimiento,
          email: data.email,
          telefono: data.telefono,
          foto: data.foto,
          pass: data.pass,
          tipo: data.tipo
        })
      })
    }
  }
}
