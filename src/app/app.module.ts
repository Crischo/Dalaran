import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//bidireccional
import { FormsModule } from '@angular/forms';
//servicio
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
//AngularFire2
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
//Componentes
import { AppComponent } from './app.component';
import { CabezaComponent } from './cabeza/cabeza.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { PieComponent } from './pie/pie.component';
import { CombosComponent } from './combos/combos.component';
import { MensajeComponent } from './mensaje/mensaje.component';
//importo servicios
import {CarrerasService} from './servicios/carreras.service';

import {SalasService} from './servicios/salas.service';

//promesa

@NgModule({
  declarations: [
    AppComponent,
    CabezaComponent,
    CuerpoComponent,
    PieComponent,
    CombosComponent,
    MensajeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, // for database

    FormsModule
  ],
  //en providers van los servicios
  providers: [CarrerasService,SalasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
