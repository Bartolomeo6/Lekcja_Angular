import { Component } from '@angular/core';

@Component({
  selector: 'app-stopka',
  standalone: true,
  imports: [],
  templateUrl: './stopka.component.html',
  styleUrl: './stopka.component.css'
})
export class StopkaComponent {
  rok: Date = new Date();
  aktualny_rok = this.rok.getFullYear();
}
