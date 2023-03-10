import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {
  usuario = {
    nombre: '',
    last_name: '',
    email: ''
  }

  constructor(private router: Router) {}

  navigateReactive() {
    this.router.navigate(['/reactive'])
  }

  guardar(formulario: NgForm) {
    if(formulario.invalid) return;
    console.log(formulario.value);    
  }

}
