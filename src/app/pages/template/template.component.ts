import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import { PaisService } from 'src/app/services/pais.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  paises : any[] = [];
  usuario = {
    nombre: '',
    last_name: '',
    email: '',
    pais: '',
    genero: 'M'
  }

  constructor(private router: Router,
              private paisService: PaisService) {}

  ngOnInit(): void {
    this.paisService.getPaises().subscribe((resp) => {
      this.paises = resp;
      this.paises.unshift({nombre: '[ Selecciona un pais ]', codigo: ''});
    });
  }

  navigateReactive() {
    this.router.navigate(['/reactive'])
  }

  guardar(formulario: NgForm) {
    if(formulario.invalid) return;
    console.log(formulario.value);    
  }

}
