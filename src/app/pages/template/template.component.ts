import { Component, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import { ErrorsMessageService } from 'src/app/services/errors-message.service';
import { PaisService } from 'src/app/services/pais.service';
import { SweetAlertService } from 'src/app/services/sweet-alert.service';
import { TemplateData } from 'src/interfaces/template-data.interface';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  paises : any[] = [];
  savedData : TemplateData[] = [];
  usuario = {
    nombre: '',
    last_name: '',
    email: '',
    pais: '',
    genero: 'M'
  }

  constructor(private router: Router,
              private paisService: PaisService,
              private sweetAlert: SweetAlertService,
              private dataService: ErrorsMessageService
             ) {}

  ngOnInit(): void {
    this.paisService.getPaises().subscribe((resp) => {
      this.paises = resp;
      this.paises.unshift({nombre: '[ Selecciona un pais ]', codigo: ''});
    }, () => {
      this.paises = [{nombre: 'México', codigo: 'MX'}, {nombre: 'Estados Unidos', codigo: 'USA'}, {nombre: 'Colombia', codigo: 'COL'}]
    });
  }

  navigateReactive() {
    this.router.navigate(['/']);
  }

  guardar(formulario: FormGroupDirective | any) {
    if(formulario.invalid) return;
    this.sweetAlert.success();
    this.savedData.push(formulario.value);
    formulario.resetForm(this.usuario);
  }

  visualizar() {
    this.dataService.templateData = this.savedData;
    this.router.navigate(['/template-data']);
  }

}
