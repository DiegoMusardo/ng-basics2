import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntestazioneComponent } from './intestazione/intestazione.component';
import { GruppoProdottiComponent } from './gruppo-prodotti/gruppo-prodotti.component';
import { ProdottoVetrinaComponent } from './prodotto-vetrina/prodotto-vetrina.component';

@NgModule({
  declarations: [
    AppComponent,
    IntestazioneComponent,
    GruppoProdottiComponent,
    ProdottoVetrinaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
