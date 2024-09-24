import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { OsobyComponent } from './osoby/osoby.component';
import { RouterModule } from '@angular/router';
import { BanerComponent } from './baner/baner.component';
import { StopkaComponent } from "./stopka/stopka.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, OsobyComponent, RouterModule, BanerComponent, StopkaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'osoby';
}
