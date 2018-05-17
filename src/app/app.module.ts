import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BrandNavComponent } from './brand-nav/brand-nav.component';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { TermsComponent } from './terms/terms.component';
import { SpecialistsComponent } from './specialists/specialists.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    BrandNavComponent,
    TopNavBarComponent,
    HomeComponent,
    AboutComponent,
    FacilitiesComponent,
    TermsComponent,
    SpecialistsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
