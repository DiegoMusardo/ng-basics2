import { Component } from '@angular/core';
import { VoceMenu } from '../models/voce-menu';

@Component({
  selector: 'app-intestazione',
  templateUrl: './intestazione.component.html',
  styleUrl: './intestazione.component.css'
})
export class IntestazioneComponent {
  vociMenu: VoceMenu[] = [
    {
      titolo: "Chi Siamo",
      url: "https://www.google.com",
      attivata: true
    },
    {
      titolo: "Contatti",
      url: "https://www.instagram.com",
      attivata: true
    },
    {
      titolo: "Assistenza",
      url: "https://www.ferrari.com",
      attivata: true
    },
    {
      titolo: "Lavora Per Noi",
      url: "https://www.amazon.com",
      attivata: false
    }
  ]

  utenteLoggato = true;

  entra() {
    this.utenteLoggato = true;
  }

  esci() {
    this.utenteLoggato = false;
  }
}
