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
import { AdminListeCommandeComponent } from './admin-liste-commande/admin-liste-commande.component';
import { QuisuisjeComponent } from './quisuisje/quisuisje.component';
import { RenouvellementmpComponent } from './renouvellementmp/renouvellementmp.component';
import { AvisComponent } from './avis/avis.component';
import { ListeArticleComponent } from './liste-article/liste-article.component';
import { DetailArticleComponent } from './detail-article/detail-article.component';
import { PanierComponent } from './panier/panier.component';
import { CommandeComponent } from './commande/commande.component';
import { SuiviCommandeComponent } from './suivi-commande/suivi-commande.component';

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
  { path: 'admin-liste-commande', component: AdminListeCommandeComponent },
  { path: 'quisuisje', component: QuisuisjeComponent },
  { path: 'renouvellementmp', component: RenouvellementmpComponent },
  { path: 'avis', component: AvisComponent },
  { path: 'listearticle', component: ListeArticleComponent},
  { path: 'detailarticle', component: DetailArticleComponent},
  { path: 'panier', component: PanierComponent},
  { path: 'commande', component: CommandeComponent},
  { path: 'suivi-commande', component: SuiviCommandeComponent},

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}

