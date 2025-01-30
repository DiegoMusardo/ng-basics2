import { Component, Input } from '@angular/core';
import { Prodotto } from '../models/prodotto';

@Component({
  selector: 'app-gruppo-prodotti',
  templateUrl: './gruppo-prodotti.component.html',
  styleUrl: './gruppo-prodotti.component.css'
})
export class GruppoProdottiComponent {
  @Input()
  titolo: string = ""; // type inference

  @Input()
  prodotti: Prodotto[] = []

  saluta() {
    let n = 9;
    let m: number;
  }
}
