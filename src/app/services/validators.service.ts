import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
const FORBIDDEN_HOBIES = "patear perritos";

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  constructor() { }

  forbiddenHobbies(control: FormControl): {[s:string]: boolean} | null {
    if (control.value?.toLowerCase().trim() === FORBIDDEN_HOBIES) {
      return {
        forbiddenHobbie: true
      }
    }

    return null;
  }
}
