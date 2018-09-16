import { Injectable } from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {PostPersona} from '../clases/clasePersona';


@Injectable({
  providedIn: 'root'
})
export class SalasService {

  constructor(private http: Http) {
    console.log('service persona is working!');
  }
  getPersona(id): Promise<any> {

    let data = {idPersona: id};
    return this.http.post('http://yavirac.edu.ec/ignug/server/chat/consultar_salas', JSON.stringify(data))
    .toPromise().then(
      respuesta => respuesta.json()
    ).catch(
      error => {
        Promise.reject(error.message || error);
      }
    );
  }
}


