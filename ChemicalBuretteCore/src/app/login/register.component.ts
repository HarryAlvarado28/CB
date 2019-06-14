import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private _authService: AuthService) { }

  ngOnInit() { }

  registrarUsuario(forma: NgForm){
    console.log("Te esta registrando!!! valor de la formareg: ", forma.value)
    // this._authService.doRegister({
    //   email: forma.value.email, 
    //   password: forma.value.password
    // })
  }

}
