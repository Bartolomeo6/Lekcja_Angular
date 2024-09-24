import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Osoba } from '../osoba';
import { OsobyService } from '../osoby.service';
import { CzlowiekComponent } from '../czlowiek/czlowiek.component';


@Component({
  selector: 'app-osoby',
  standalone: true,
  imports: [CommonModule,CzlowiekComponent],
  templateUrl: './osoby.component.html',
  styleUrl: './osoby.component.css'
})
export class OsobyComponent {
  listaosob:Osoba[]=[];
  constructor(osobyService:OsobyService){
    this.listaosob=osobyService.getListaOsob()
  }

}
