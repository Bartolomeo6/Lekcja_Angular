import { Component , Input} from '@angular/core';
import { Osoba } from '../osoba';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-czlowiek',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './czlowiek.component.html',
  styleUrl: './czlowiek.component.css'
})
export class CzlowiekComponent {
@Input() czlowiek!:Osoba;
}
