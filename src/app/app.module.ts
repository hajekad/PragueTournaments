import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { MyNavComponent } from './my-nav/my-nav.component';
import { MailMeComponent } from './mail-me/mail-me.component';
import { MyFooterComponent } from './my-footer/my-footer.component';
import { MyBodyComponent } from './my-body/my-body.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    MyNavComponent,
    MailMeComponent,
    MyFooterComponent,
    MyBodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
