import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { ReactiveResponse } from 'src/interfaces/reactive-data.interface';

@Injectable({
  providedIn: 'root'
})
export class ErrorsMessageService {

  public data: ReactiveResponse[] = [];

  getNombreErrors(nameControl : AbstractControl): string {
    if (nameControl.hasError('required')) {
      return 'Ingresa tu nombre'
    }

    return 'Debe incluir al menos 3 letras';
  }

  getApellidosErrors(apellidosControl : AbstractControl) {
    if (apellidosControl.hasError('required')) {
      return 'Ingresa tus apellidos';
    }

    return 'Debe incluir al menos 3 letras';
  }

  getEmailErrors(correoControl : AbstractControl) {
    if (correoControl.hasError('required')) {
      return 'Ingresa tu correo';
    } else if (correoControl.hasError('existe')) {
      return 'Correo ya registrado';
    }

    return 'Ingresa un correo válido';
  }

  getPassword(pass1Control : AbstractControl) {
    if (pass1Control?.hasError('required')) {
      return 'Ingresa una contraseña';
    }
    return '';
  }

  getPasswordConfirm(pass2Control : AbstractControl) {
    if (pass2Control?.hasError('badPassConfirm')) {
      return 'No coinciden las contraseñas';
    } else if (pass2Control?.hasError('required')) {
      return 'Confirma tu contraseña';
    }
    return '';
  }

  getCalleErrors(calleControl : AbstractControl | null) {
    if (calleControl!.hasError('required')) {
      return 'Ingresa tu calle y número';
    }
    return '';
  }

  getCiudadErrors(ciudadControl : AbstractControl | null) {
    if (ciudadControl!.hasError('required')) {
      return 'Ingresa tu ciudad';
    }
    return '';
  }

  getHobbiesErrors(hobbieControl : AbstractControl) {
    if (hobbieControl.hasError('forbiddenHobbie')) {
      return 'Prohibido patear perritos 😡';
    } else if (hobbieControl.hasError('required')) {
      return 'Escribe un hobbie o borralo';
    }
    return '';
  }


}
