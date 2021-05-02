import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Encuesta } from 'src/app/clases/encuesta';
import { EncuestaService } from 'src/app/services/encuesta.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-form-encuesta',
  templateUrl: './form-encuesta.component.html',
  styleUrls: ['./form-encuesta.component.css']
})
export class FormEncuestaComponent implements OnInit {
  
 

  
  public formularioAlta! : FormGroup;
  phonePattern = /^[0-9]{1,10}$/;
  encuesta! : Encuesta;



  constructor(private fb: FormBuilder, private encSvc : EncuestaService,private router: Router) {
   this.encuesta = new Encuesta();
   }

  ngOnInit(): void {

    this.formularioAlta = this.fb.group({
      'nombre': ['',Validators.required],
      'apellido': ['',Validators.required],
      'edad': ['',[Validators.required,Validators.min(18),Validators.max(99)]],
      'tel': ['',[Validators.required,Validators.pattern(this.phonePattern),]],
      'juego': ['',Validators.required],
      'calificacion': ['',Validators.required],
      'termino': ['',Validators.required]
     
      
    });
  }


  async GuardarEncuesta(){
    if(this.formularioAlta.valid){
      this.cargarEncuesta();
      try {        
        this.encSvc.onSaveContact(this.encuesta);          
           console.log(this.encuesta);
            //ok
           Swal.fire('Mensaje Enviado', 
           'Todo subio correctamente!!',
           'success').then((result) => {
            this.router.navigate(['/juegos']);            
            });
           this.formularioAlta.reset();          
          } catch (error) {
        console.log(error);
        Swal.fire('Algo Salio Mal!','Revisa el contenido del formulario','error');  
          }
    }
    
    }

    cargarEncuesta(){
      
      this.encuesta.nombre = this.formularioAlta.get('nombre')?.value;
      this.encuesta.apellido = this.formularioAlta.get('apellido')?.value
      this.encuesta.edad = this.formularioAlta.get('edad')?.value
      this.encuesta.telefono = this.formularioAlta.get('tel')?.value
      this.encuesta.juego = this.formularioAlta.get('juego')?.value
      this.encuesta.calificacion = this.formularioAlta.get('calificacion')?.value
      this.encuesta.usuario=  JSON.parse(localStorage.getItem("usuarioEnLinea")?.toString()!);      

    }
  
      

}
