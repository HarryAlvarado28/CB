import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  registrarUsuario(forma: NgForm){
    console.log("Te esta registrando!!! valor de la formareg: ", forma.value)
  }

}
