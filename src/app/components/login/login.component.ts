import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Credenciais } from 'src/app/models/Credenciais';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

    creds: Credenciais = {
      email: '',
      senha: ''
    }
  
    email = new FormControl(null, Validators.email);
    senha = new FormControl(null, Validators.minLength(3));


    constructor(
      private toastr: ToastrService,
      private authService: AuthService,
      private router: Router
      ) {}
  
   ngOnInit(): void {
       
   } 

   logar(){
    this.authService.authenticate(this.creds).subscribe(resposta => {
      this.authService.successfullLogin(resposta.headers.get('Authorization').substring(7));
      this.router.navigate(['']);
    }, () => {
      this.toastr.error('Usuário ou senha inválidos!')
    })
   }


   validaCampos(): boolean{  
    return this.email.valid && this.senha.valid;
   }


}
