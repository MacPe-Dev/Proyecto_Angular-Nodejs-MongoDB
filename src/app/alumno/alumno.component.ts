import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { GusuarioService} from '../servicios/gusuarios.service';
import { GUsuario} from '../Models/Gusuario';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit{
  listUsuarios: GUsuario[] = []
  

  constructor(private _gusuarioService: GusuarioService, private toastr: ToastrService ){
    }
    ngOnInit(): void{
    this.obtenerUsuarios()
  }
  obtenerUsuarios() {
    this._gusuarioService.getUsuarios().subscribe(data => {
      console.log(data);
      this.listUsuarios = data;
    }, error => {
      console.log(error);
    })
  }
  
  eliminarUsuario(id: any) {
    this._gusuarioService.eliminarUsuario(id).subscribe(data => {
      this.toastr.error('El usuario fue eliminado con exito' ,'Usuario Eliminado');
      this.obtenerUsuarios();
    }, error => {
      console.log(error);
    })
  }
}
