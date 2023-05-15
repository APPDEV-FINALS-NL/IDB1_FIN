import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
import { ChatComponent } from './comps/chat/chat.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path:'home', component: HomeComponent},
  { path:'account', component: AccountComponent},
  { path:'footer', component: FooterComponent},
  { path:'about', component: AboutComponent},
  { path:'contact', component: ContactComponent},
  { path:'references', component: ReferencesComponent},
  { path:'bodysuits', component: BodysuitsComponent},
  { path:'bibs', component: BibsComponent},
  { path:'mittens', component: MittensComponent},
  { path:'hats', component: HatsComponent},
  { path:'blankets', component: BlanketsComponent},
  { path:'pants', component: PantsComponent},
  { path:'shirts', component: ShirtsComponent},
  { path:'jackets', component: JacketsComponent},
  { path:'diapers', component: DiapersComponent},
  { path:'cart', component:  CartComponent},
  { path: 'buynow', component: BuynowComponent},
  { path: 'acclists', component:AcclistsComponent},
  { path: 'chat', component:ChatComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
