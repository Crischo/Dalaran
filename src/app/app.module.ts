import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//servicio
import {HttpClientModule} from '@angular/common/http';
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
import {CarrerasService} from './carreras.service';



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
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, // for database
  ],
  //en providers van los servicios
  providers: [CarrerasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
