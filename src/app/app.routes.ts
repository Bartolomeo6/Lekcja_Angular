import { Routes } from '@angular/router';
import { OsobyComponent } from './osoby/osoby.component';
import { ONasComponent } from './o-nas/o-nas.component';
import { BrakStronyComponent } from './brak-strony/brak-strony.component';
import { OpisCzlowiekaComponent } from './opis-czlowieka/opis-czlowieka.component';


export const routes: Routes = [
    {path:"",component:OsobyComponent},
   {path:"osoby", component:OsobyComponent},
   {path:"osoby/:id", component:OpisCzlowiekaComponent},
   {path:"onas", component:ONasComponent},
   {path:"**",component:BrakStronyComponent}
];
