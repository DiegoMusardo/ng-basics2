import { Component } from '@angular/core';
import { Prodotto } from './models/prodotto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-basics';

  prodotti: Prodotto[] = [
      {
        nome: "Bici",
        desc: "Nera",
        prezzo: 100,
        foto: "https://dummyimage.com/100x200/000000/fff"
      },
      {
        nome: "Friggitrice",
        desc: "Ad aria",
        prezzo: 80,
        foto: "https://dummyimage.com/100x200/000000/fff"
      }
    ]

  prodottiFestaDellaDonna: Prodotto[] = [
    {
      nome: "Scarpe",
      desc: "Nera",
      prezzo: 100,
      foto: "https://dummyimage.com/100x200/000000/fff"
    },
    {
      nome: "Borsa",
      desc: "Luis Vuitton",
      prezzo: 800,
      foto: "https://dummyimage.com/100x200/000000/fff"
    }
  ]
}
