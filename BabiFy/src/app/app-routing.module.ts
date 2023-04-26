import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './comps/sign-in/sign-in.component';
import { LoginComponent } from './comps/login/login.component';
import { HomeComponent } from './comps/home/home.component';
import { FooterComponent } from './comps/footer/footer.component';
import { AboutComponent } from './comps/about/about.component';
import { CategoriesComponent } from './categories/categories.component';
import { BodysuitsComponent } from './categories/bodysuits/bodysuits.component';
import { BibsComponent } from './categories/bibs/bibs.component';
import { MittensComponent } from './categories/mittens/mittens.component';
import { HatsComponent } from './categories/hats/hats.component';
import { BlanketsComponent } from './categories/blankets/blankets.component';
import { PantsComponent } from './categories/pants/pants.component';
import { ShirtsComponent } from './categories/shirts/shirts.component';
import { JacketsComponent } from './categories/jackets/jackets.component';
import { DiapersComponent } from './categories/diapers/diapers.component';

const routes: Routes = [
  { path:'sign-in', component: SignInComponent},
  { path:'login', component: LoginComponent},
  { path:'home', component: HomeComponent},
  { path:'footer', component: FooterComponent},
  { path:'about', component: AboutComponent},
  { path:'bodysuits', component: BodysuitsComponent},
  { path:'bibs', component: BibsComponent},
  { path:'bib/:id', component: BibsComponent},
  { path:'mittens', component: MittensComponent},
  { path:'hats', component: HatsComponent},
  { path:'blankets', component: BlanketsComponent},
  { path:'pants', component: PantsComponent},
  { path:'shirts', component: ShirtsComponent},
  { path:'jackets', component: JacketsComponent},
  { path:'diapers', component: DiapersComponent},
  { path:'categories', component:  CategoriesComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
