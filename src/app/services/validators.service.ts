import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  constructor() { }

  forbiddenHobbies(control: FormControl): {[s:string]: boolean} | null {
    if (control.value.toLowerCase().trim() === "irle al america") {
      return {
        forbiddenHobbie: true
      }
    }

    return null;
  }
}
