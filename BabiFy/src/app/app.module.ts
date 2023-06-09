import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppRoutingModule } from './app-routing.module';
import { CountdownModule } from 'ngx-countdown';

import { AppComponent } from './app.component';
import { NavbarComponent } from './comps/navbar/navbar.component';
import { HomeComponent } from './comps/home/home.component';
import { AccountComponent } from './comps/account/account.component';
import { FooterComponent } from './comps/footer/footer.component';
import { AboutComponent } from './comps/about/about.component';
import { ContactComponent } from './comps/contact/contact.component';
import { ReferencesComponent } from './comps/references/references.component';
import { BodysuitsComponent } from './categories/bodysuits/bodysuits.component';
import { BibsComponent } from './categories/bibs/bibs.component';
import { MittensComponent } from './categories/mittens/mittens.component';
import { HatsComponent } from './categories/hats/hats.component';
import { BlanketsComponent } from './categories/blankets/blankets.component';
import { PantsComponent } from './categories/pants/pants.component';
import { ShirtsComponent } from './categories/shirts/shirts.component';
import { JacketsComponent } from './categories/jackets/jackets.component';
import { DiapersComponent } from './categories/diapers/diapers.component';
import { CartComponent } from './cart/cart.component';
import { BuynowComponent } from './buynow/buynow.component';
import { AcclistsComponent } from './comps/acclists/acclists.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ChatComponent } from './comps/chat/chat.component';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AccountComponent,
    FooterComponent,
    AboutComponent,
    BodysuitsComponent,
    BibsComponent,
    MittensComponent,
    HatsComponent,
    BlanketsComponent,
    PantsComponent,
    ShirtsComponent,
    JacketsComponent,
    DiapersComponent,
    CartComponent,
    ContactComponent,
    ReferencesComponent,
    BuynowComponent,
    AcclistsComponent,
    ChatComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    CountdownModule,
    // FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
