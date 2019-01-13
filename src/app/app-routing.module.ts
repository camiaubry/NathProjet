import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AccueilComponent} from "./accueil/accueil.component";
import {LoginComponent} from "./login/login.component";
import { InscriptionComponent } from './inscription/inscription.component';
import { MpoublierComponent } from './mpoublier/mpoublier.component';
import { MentionslegalesComponent } from './mentionslegales/mentionslegales.component';
import { FooterComponent } from './footer/footer.component';
import { CgvComponent } from './cgv/cgv.component';
import { ContactComponent } from './contact/contact.component';
import { AdminAddArticleComponent } from './admin-add-article/admin-add-article.component';

const routes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'login', component: LoginComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'motdepasseoublier', component: MpoublierComponent },
  { path: 'mentionslegales', component: MentionslegalesComponent },
  { path: 'cgv', component: CgvComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'admin-add-article', component: AdminAddArticleComponent },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}

