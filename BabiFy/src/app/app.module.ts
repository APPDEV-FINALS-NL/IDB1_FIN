import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './comps/navbar/navbar.component';
import { SignInComponent } from './comps/sign-in/sign-in.component';
import { LoginComponent } from './comps/login/login.component';
import { HomeComponent } from './comps/home/home.component';
import { FooterComponent } from './comps/footer/footer.component';
import { AboutComponent } from './comps/about/about.component';
import { BreadcrumbComponent } from './comps/breadcrumb/breadcrumb.component';
import { BodysuitsComponent } from './categories/bodysuits/bodysuits.component';
import { BibsComponent } from './categories/bibs/bibs.component';
import { MittensComponent } from './categories/mittens/mittens.component';
import { HatsComponent } from './categories/hats/hats.component';
import { BlanketsComponent } from './categories/blankets/blankets.component';
import { PantsComponent } from './categories/pants/pants.component';
import { ShirtsComponent } from './categories/shirts/shirts.component';
import { JacketsComponent } from './categories/jackets/jackets.component';
import { DiapersComponent } from './categories/diapers/diapers.component';
import { CategoriesComponent } from './categories/categories.component';
import { ViewBibsComponent } from './components/view-bibs/view-bibs.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignInComponent,
    LoginComponent,
    HomeComponent,
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
    CategoriesComponent,
    ViewBibsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
