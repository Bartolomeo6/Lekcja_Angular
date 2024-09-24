import { Injectable } from '@angular/core';
import { Osoba } from './osoba';

@Injectable({
  providedIn: 'root'
})
export class OsobyService {
  bmi=0
  listaOsob:Osoba[]=[
  {id:1,
    imie:"Ola",
    nazwisko:"Nowak",
    dataUr:"2012-02-25",
    zdjecie:"assets/ola.jpg",
    wzrost:156,
    waga:45
  },
  {id:2,
    imie:"Ela",
    nazwisko:"Kowalska",
    dataUr:"2016-03-25",
    zdjecie:"assets/ela.jpg",
    wzrost:145,
    waga:42
  },
  {id:3,
    imie:"Ewa",
    nazwisko:"Nowak",
    dataUr:"2012-02-25",
    zdjecie:"assets/ewa.jpg",
    wzrost:156,
    waga:45
  }
 ];
 getListaOsob():Osoba[]{
  return this.listaOsob
 } 

 getOsobaById(id: number): Osoba | undefined {
  return this.listaOsob.find((osoba) => osoba.id === id);
 }

}
