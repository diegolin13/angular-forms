import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SweetAlertService {

  constructor() { }

  noData(): Promise<any> {
    return Swal.fire({
      title: 'Sin información registrada',
      text: "¿Deseas continuar con información de relleno?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Regresar',
      confirmButtonText: 'Rellenar tabla'
    });
  }

  success() {
    Swal.fire({
      icon: 'success',
      title: '¡Información registrada!',
      showConfirmButton: false,
      timer: 1500
    });
  }
}
