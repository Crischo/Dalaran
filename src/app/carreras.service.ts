import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Post} from './claseCarrera';
@Injectable({
  providedIn: 'root'
})
export class CarrerasService {

 
  constructor(private http: HttpClient) {
    console.log('service is working!');
    
       }
       getData(){
        return this.http.get<Post[]>('http://yavirac.edu.ec/ignug/server/carrera/leer')
       }
}
