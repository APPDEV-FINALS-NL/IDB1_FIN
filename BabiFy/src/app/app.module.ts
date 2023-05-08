import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './comps/navbar/navbar.component';
import { HomeComponent } from './comps/home/home.component';
import { AccountComponent } from './comps/account/account.component';
import { FooterComponent } from './comps/footer/footer.component';
import { AboutComponent } from './comps/about/about.component';
import { BreadcrumbComponent } from './comps/breadcrumb/breadcrumb.component';
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
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { CategoriesDetailsComponent } from './categories-details/categories-details.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AccountComponent,
    FooterComponent,
    AboutComponent,
    BreadcrumbComponent,
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
    CategoriesListComponent,
    CategoriesDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
