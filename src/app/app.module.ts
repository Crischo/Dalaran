import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CabezaComponent } from './cabeza/cabeza.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { PieComponent } from './pie/pie.component';
import { CombosComponent } from './combos/combos.component';
import { MensajeComponent } from './mensaje/mensaje.component';



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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
