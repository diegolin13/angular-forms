import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { ReactiveResponse } from 'src/interfaces/reactive-data.interface';

@Injectable({
  providedIn: 'root'
})
export class ErrorsMessageService {

  public data: ReactiveResponse[] = [];
  public randomData: ReactiveResponse[] = [
    {nombre: 'Bernardo', apellidos: 'Trejo Araujo', correo: 'bernardo@gmail.com', pass1: 'secret', direccion: {calle: 'Mar Cantábrico 8', ciudad: 'CDMX'}, pasatiempos: ['Leer', 'Ver Series']},
    {nombre: 'Angela', apellidos: 'Yu', correo: 'angela@gmail.com', pass1: 'secret', direccion: {calle: 'Elm Street 45', ciudad: 'LA'}, pasatiempos: ['Enseñar', 'Jugar fútbol']},
    {nombre: 'Esteban', apellidos: 'De la Torre', correo: 'esteban@gmail.com', pass1: 'secret', direccion: {calle: 'Calle 10', ciudad: 'CDMX'}, pasatiempos: ['Ir a la playa']},
    {nombre: 'Claudia', apellidos: 'Benitez Zamora', correo: 'clau@gmail.com', pass1: 'secret', direccion: {calle: 'Jacarandos 8', ciudad: 'EDOMEX'}, pasatiempos: []},
    {nombre: 'Miguel', apellidos: 'Cervantes', correo: 'miguel@gmail.com', pass1: 'secret', direccion: {calle: 'Talleres 58', ciudad: 'TIJ'}, pasatiempos: ['Jugar videojuegos', 'Ver futbol', 'Dormir']},
    {nombre: 'Norma', apellidos: 'Velázquez Sánchez', correo: 'norma@gmail.com', pass1: 'secret', direccion: {calle: 'Playa Mirador 898', ciudad: 'CDMX'}, pasatiempos: ['Ir de compras']},
    {nombre: 'Juan', apellidos: 'Ruiz Rangel', correo: 'citla@gmail.com', pass1: 'secret', direccion: {calle: 'Olivares 8', ciudad: 'CDMX'}, pasatiempos: ['Pasear']},
    {nombre: 'Citali', apellidos: 'Guevara Molina', correo: 'bernardo@gmail.com', pass1: 'secret', direccion: {calle: 'Mar Cantábrico 8', ciudad: 'CDMX'}, pasatiempos: ['Cocinar']},
    {nombre: 'Jorge', apellidos: 'Montes', correo: 'jorge@gmail.com', pass1: 'secret', direccion: {calle: 'Asturias 453', ciudad: 'CDMX'}, pasatiempos: ['Andar en bici', 'Hacer ejercicio', 'Salir de viaje']},
    {nombre: 'Fernanda', apellidos: 'Vega', correo: 'fer@gmail.com', pass1: 'secret', direccion: {calle: 'Pirineos 8', ciudad: 'CDMX'}, pasatiempos: ['Salir']},
    {nombre: 'Joshue', apellidos: 'Almaraz', correo: 'josh@gmail.com', pass1: 'secret', direccion: {calle: 'Montevideo 8', ciudad: 'CDMX'}, pasatiempos: ['Tocar bateria', 'Escuchar música']},
    {nombre: 'Mafer', apellidos: 'De la O', correo: 'mafer@gmail.com', pass1: 'secret', direccion: {calle: 'Insurgentes 92', ciudad: 'CDMX'}, pasatiempos: ['Bailar', 'Cantar']},
    {nombre: 'Tomas', apellidos: 'Porráz Alcazar', correo: 'tom@gmail.com', pass1: 'secret', direccion: {calle: 'Postales 3', ciudad: 'CDMX'}, pasatiempos: ['Nadar']},
  ];

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
