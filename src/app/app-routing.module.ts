import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AccueilComponent} from "./accueil/accueil.component";
import {LoginComponent} from "./login/login.component";
import { InscriptionComponent } from './inscription/inscription.component';
import { MpoublierComponent } from './mpoublier/mpoublier.component';
import { MentionslegalesComponent } from './mentionslegales/mentionslegales.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'login', component: LoginComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'mpoublier', component: MpoublierComponent },
  { path: 'mentionslegales', component: MentionslegalesComponent },
  { path: 'footer', component: FooterComponent },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}

