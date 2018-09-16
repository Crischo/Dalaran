import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../servicios/persona.service';
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

constructor(private personaService: PersonaService, private http: Http) {

}

ngOnInit() {
}

alertPersona() {

  this.busy = this.personaService.getPersona().then(
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



