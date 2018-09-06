import { Injectable } from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {PostPersona} from './clasePersona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http: Http) {
    console.log('service persona is working!');
   }
   getPersona(): Promise<any> {
    let data = {idPersona: 520};
    return this.http.post('http://yavirac.edu.ec/ignug/server/chat/consultar_salas', JSON.stringify(data))
    .toPromise().then(
      respuesta => respuesta.json()
    ).catch(
      error => {
        Promise.reject(error.message || error)
      }
    );
  }
}


