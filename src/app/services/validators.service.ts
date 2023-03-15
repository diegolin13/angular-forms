import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {Observable} from 'rxjs';
const FORBIDDEN_HOBIES = "patear perritos";
const EMAIL_EXISTS = 'test@test.com'

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

  checkPasswords(pass1Name: string, pass2Name: string) {
    return (formGroup: FormGroup) => {
      const pass1Control = formGroup.controls[pass1Name];
      const pass2Control = formGroup.controls[pass2Name];

      if (pass1Control.value == pass2Control.value) {
        pass2Control.setErrors(null);
      } else {
        pass2Control.setErrors({ badPassConfirm: true });
      }
    }

  }

  emailExists(control: FormControl): Promise<{[s:string]: boolean} | null> | Observable<{[s:string]: boolean} | null>{
    if (!control.value) {
      return Promise.resolve(null);
    }

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === EMAIL_EXISTS) {
          resolve({existe: true});
        } else {
          resolve(null);
        }
      }, 2000);
    });
  }
}
