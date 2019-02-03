import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
const routes : Routes = []

import 'hammerjs';
import { NgxHmCarouselModule } from 'ngx-hm-carousel';

import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';
import {AccueilComponent} from "./accueil/accueil.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { InscriptionComponent } from './inscription/inscription.component';
import { MpoublierComponent } from './mpoublier/mpoublier.component';
import { MentionslegalesComponent } from './mentionslegales/mentionslegales.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { CgvComponent } from './cgv/cgv.component';
import { ContactComponent } from './contact/contact.component';
import { AdminAddArticleComponent } from './admin-add-article/admin-add-article.component';
import { AdminListeCommandeComponent } from './admin-liste-commande/admin-liste-commande.component';
import { QuisuisjeComponent } from './quisuisje/quisuisje.component';
import { RenouvellementmpComponent } from './renouvellementmp/renouvellementmp.component';
import { AvisComponent } from './avis/avis.component';

import { FormsModule } from '@angular/forms';
import { ListeArticleComponent } from './liste-article/liste-article.component';
// import {LoginService} from "./service/login/login.service";

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    LoginComponent,
    InscriptionComponent,
    MpoublierComponent,
    MentionslegalesComponent,
    FooterComponent,
    MenuComponent,
    CgvComponent,
    ContactComponent,
    AdminAddArticleComponent,
    AdminListeCommandeComponent,
    QuisuisjeComponent,
    RenouvellementmpComponent,
    AvisComponent,
    ListeArticleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatToolbarModule,
    AppRoutingModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    BrowserAnimationsModule,
    NgxHmCarouselModule,
    RouterModule.forRoot(routes, { useHash: true }),
  ],
  providers: [
    // LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
