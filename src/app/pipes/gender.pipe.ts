import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(value: string): string {
    if (value === 'M') {
      return 'Masculino';
    } else if(value === 'F') {
      return 'Femenino';
    }

    return '';
  }

}
