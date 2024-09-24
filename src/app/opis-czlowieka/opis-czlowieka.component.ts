import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { OsobyService } from '../osoby.service';
import { Osoba } from '../osoba';

@Component({
  selector: 'app-opis-czlowieka',
  standalone: true,
  imports: [RouterLink, RouterModule],
  templateUrl: './opis-czlowieka.component.html',
  styleUrl: './opis-czlowieka.component.css'
})
export class OpisCzlowiekaComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  serwisOsoby: OsobyService = inject(OsobyService);
  czlowiekId = -1;
  wybranyCzlowiek: Osoba | undefined;
  constructor(){
    this.czlowiekId = Number(this.route.snapshot.params['id']);
    this.wybranyCzlowiek = this.serwisOsoby.getOsobaById(this.czlowiekId);
  }
}
