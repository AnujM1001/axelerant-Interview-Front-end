import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { LandingBannerComponent } from './landing-banner/landing-banner.component';
import { AboutComponent } from './about/about.component';
import { TestomonialsComponent } from './testomonials/testomonials.component';
import { ConnectWithUsComponent } from './connect-with-us/connect-with-us.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationMenuComponent,
    LandingBannerComponent,
    AboutComponent,
    TestomonialsComponent,
    ConnectWithUsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
