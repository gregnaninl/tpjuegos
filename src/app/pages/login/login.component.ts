import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Logs } from 'src/app/clases/logs';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  private isEmail = /\S+@\S+\.\S+/;
  logs! : Logs;

  constructor(private fb: FormBuilder,private router: Router, 
    public authSvc : AuthService) { 
      this.logs = new Logs();

    }

  ngOnInit(): void {
    this.initForm();
  }



  //implementacion Formulario
  private initForm():void{
    this.loginForm  = this.fb.group({
      email:['',[Validators.required, Validators.pattern(this.isEmail)]],
      password:['',[Validators.required,Validators.minLength(6),Validators.maxLength(200)]],
    })
  }

  isValidField(field: string): string {   
    const validatedField = this.loginForm.get(field);
   
     return (!validatedField?.valid  &&  validatedField?.touched  )
       ? 'is-invalid' : validatedField?.touched ? 'is-valid' : '';
   } 
   error(validatedField: import("@angular/forms").AbstractControl | null) {
     throw new Error('Method not implemented.');
   }


   //cargar datos user
   onUserLogin(){
   this.loginForm.get('email')?.setValue('user@gmail.com');
    this.loginForm.get('password')?.setValue('user123');
   }

   onTestLogin(){
    this.loginForm.get('email')?.setValue('test@gmail.com');
     this.loginForm.get('password')?.setValue('123456');
    }

   //login google

   async  onGoogleLogin(){
    try{
      const user = await this.authSvc.loginGoogle();
      if (user) {
       // this.checkUserIsVerified(user);
        console.log(user,"google")
      }
    }
    catch(e){
      console.log(e);
    }
  }


  async onLogin() {
    if(this.loginForm?.valid){
    
    const { email, password } = this.loginForm.value;  
     
    try {
      const user = await this.authSvc.login(email, password);
      if (user) {
        this.checkUserIsVerified(user);       
        
        }     
        } catch (error) {
      console.log(error);
        }
  
    }else{
    console.log('Formulario inconpleto');
    Swal.fire('Algo Salio Mal!','Revisa el contenido del formulario','error');    }
    }

  private checkUserIsVerified(user: any ){
    if (user.user) {
      this.router.navigate(['/']);
      console.log("ingresaste correctamente");
      //guardo el log si ingresa ok
      this.guardarLog();  
      localStorage.setItem("usuarioEnLinea",JSON.stringify(this.loginForm.get('email')?.value));   
      
    } else if(user.code == "auth/wrong-password" ){
      Swal.fire('Contraseña incorrecta','Revise la contraseña ingresada','error'); 
    }else if(user.code == "auth/user-not-found" ){
      Swal.fire('Correo rechazado','Revise el correo ingresado','error'); 
    }else if(user.__zone_symbol__state) {;
      console.log(user);
      this.router.navigate(['/']);
      console.log("ingresaste correctamente");         

      }
    else {;
      console.log(user);
      Swal.fire('Algo Salio Mal!','La contraseña o el correo son incorrectos, por favor vuelva a ingresarlos','error');   
      }
  }

  guardarLog(){
    this.logs.email = this.loginForm.get('email')?.value;  
    const fecha =  new Date();
    this.logs.fecha= formatDate(fecha,'dd-MM-yyyy hh:mm:ss a','en-US');
    console.log(this.logs);
    this.authSvc.onSaveLog(this.logs);
  }



}
