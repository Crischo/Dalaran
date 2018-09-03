import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.css']
})
export class MensajeComponent implements OnInit {
  //variables
nombreValue = '';
mensajeValue = '';
timeStamp: Date = new Date();
mensajes: Observable<any[]>;

  constructor(public db: AngularFireDatabase) {
    this.mensajes = db.list('mensajes').valueChanges();
   }

  ngOnInit() {
  }

}
