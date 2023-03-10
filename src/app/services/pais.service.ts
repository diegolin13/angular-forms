import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(private http: HttpClient) { }

  getPaises(): Observable<{nombre: any; codigo: any}[]> {
    return this.http.get<any>('https://restcountries.com/v3.1/lang/spa')
        .pipe(
          map((resp: any[]) => {
            return resp.map( pais => {
              return {
                nombre: pais.name.common,
                codigo: pais.cca3
              }
            })
          })
        )
  }
}
