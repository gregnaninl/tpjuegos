import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/clases/usuario';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  registroForm!: FormGroup;
  private isEmail = /\S+@\S+\.\S+/;

  constructor(private fb: FormBuilder,private router: Router,private  authSvc :AuthService) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm():void{
    this.registroForm  = this.fb.group({
      email:['',[Validators.required, Validators.pattern(this.isEmail)]],
      password:['',[Validators.required,Validators.minLength(6),Validators.maxLength(200)]],
    })
  }

  isValidField(field: string): string {   
    const validatedField = this.registroForm.get(field);
   
     return (!validatedField?.valid  &&  validatedField?.touched  )
       ? 'is-invalid' : validatedField?.touched ? 'is-valid' : '';
   } 
   error(validatedField: import("@angular/forms").AbstractControl | null) {
     throw new Error('Method not implemented.');
   }


  //implementacion  registro datos
  async onRegister() {
    if(this.registroForm?.valid){

    const { email, password } = this.registroForm.value;
      
    try {
      const user = await this.authSvc.register(email, password);
      if (user) {
      this.checkUserIsVerified(user);
      }
      } catch (error) {
      console.log(error);
     }

    }else{
      console.log('Fromulario incompleto');
      Swal.fire('Algo Salio Mal!','Revisa el contenido del formulario','error');   
    }
  }

  private checkUserIsVerified(user: any) {
    if (user.user) {
      this.router.navigate(['/login']);
      console.log("Registro correcto");
    }else if(user.code == "auth/email-already-in-use" ){
      Swal.fire('Correo Existente','El correo ingresado ya tiene una cuenta creada','error'); 
    }else {
      Swal.fire('Algo Salio Mal!','Revisa el contenido del formulario','error'); 
    }
  }

}
