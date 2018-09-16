import { Component, OnInit } from '@angular/core';
import { SalasService } from '../servicios/salas.service';
import { Http } from '@angular/http';
import {Sala} from './../models/sala';

@Component({
  selector: 'app-cabeza',
  templateUrl: './cabeza.component.html',
  styleUrls: ['./cabeza.component.css']
})
export class CabezaComponent implements OnInit {
personaPosts = [];
salas: Sala[] = [];
busy: Promise<any>;

id;
constructor(private personaService: SalasService, private http: Http) {

}

ngOnInit() {


}
buscarPersona() {
  this.busy = this.personaService.getPersona(this.id).then(
    respuesta => {
      this.salas = respuesta as Sala[];
    }
  ).catch(
    error => {
      console.log(error);
    }
  );
}

}



