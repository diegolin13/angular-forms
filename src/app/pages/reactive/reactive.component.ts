import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { ErrorsMessageService } from 'src/app/services/errors-message.service';
import { ValidatorsService } from 'src/app/services/validators.service';


@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent {

  hide = true;
  form!: FormGroup;

  constructor(private router: Router,
              private fb: FormBuilder,
              private validators: ValidatorsService,
              public errorsMessages: ErrorsMessageService) {
    this.createForm();
    // this.initializeForm();
  }

  get pasatiempos() {
    return this.form.get('pasatiempos') as FormArray;
  }

  navigateTemplate() {
    this.router.navigate(['/template']);
  }

  createForm() {
    this.form = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellidos: ['', [Validators.required, Validators.minLength(3)]],
      correo: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9._]+\.[a-z]{2,3}$')], [this.validators.emailExists]],
      pass1: ['', Validators.required],
      pass2: ['', Validators.required],
      direccion: this.fb.group({
        calle: ['', Validators.required],
        ciudad: ['', Validators.required]
      }),
      pasatiempos: this.fb.array([])
    }, {
      validators: [this.validators.checkPasswords('pass1', 'pass2')]
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
    while (this.pasatiempos.length !== 0) {
      this.pasatiempos.removeAt(0)
    }
    this.form.reset();
  }

  getHobbiesErrors(i: number) {
    if (this.pasatiempos.controls[i].hasError('forbiddenHobbie')) {
      return 'Prohibido patear perritos 😡';
    } else if (this.pasatiempos.controls[i].hasError('required')) {
      return 'Escribe un hobbie o borralo'
    }
    return
  }

  agregar() {
    this.pasatiempos.push(this.fb.control( '', [Validators.required, this.validators.forbiddenHobbies]));
  }

  quitar(i: number) {
    this.pasatiempos.removeAt(i);
  }

  

}
