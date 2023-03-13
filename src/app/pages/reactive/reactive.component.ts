import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent {

  form!: FormGroup;

  constructor(private router: Router,
              private fb: FormBuilder) {
    this.createForm();
    // this.initializeForm();
  }

  navigateTemplate() {
    this.router.navigate(['/']);
  }

  createForm() {
    this.form = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellidos: ['', [Validators.required, Validators.minLength(3)]],
      correo: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9._]+\.[a-z]{2,3}$')]],
      direccion: this.fb.group({
        calle: ['', Validators.required],
        ciudad: ['', Validators.required]
      }),
    });
  }

  initializeForm() {
    this.form.reset(
      {
        nombre: "Reactive",
        apellidos: "Forms",
        correo: "test@test.com",
        direccion: {
          calle: "test",
          ciudad: "test"
        }
      }
    );
  }


  guardar(formDirective: FormGroupDirective) {
    if (this.form.invalid)  return;
    console.log(this.form.value);
    formDirective.resetForm();
    this.form.reset();
  }

  getNombreErrors() {
    if (this.form.controls['nombre'].hasError('required')) {
      return 'Ingresa tu nombre'
    }

    return 'Debe incluir al menos 3 letras'
  }


  getApellidosErrors() {
    if (this.form.controls['apellidos'].hasError('required')) {
      return 'Ingresa tus apellidos'
    }

    return 'Debe incluir al menos 3 letras'
  }


  getEmailErrors() {
    if (this.form.controls['correo'].hasError('required')) {
      return 'Ingresa tu correo'
    }

    return 'Ingresa un correo válido'
  }

  getCalleErrors() {
    if (this.form.get('direccion.calle')!.hasError('required')) {
      return 'Ingresa tu calle y número'
    }
    return 
  }

  getCiudadErrors() {
    if (this.form.get('direccion.ciudad')!.hasError('required')) {
      return 'Ingresa tu ciudad'
    }
    return 
  }

  

}
