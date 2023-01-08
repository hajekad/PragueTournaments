import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { MyNavComponent } from './my-nav/my-nav.component';
import { MailMeComponent } from './mail-me/mail-me.component';
import { MyFooterComponent } from './my-footer/my-footer.component';
import { CzechOpen2022Component } from './czech-open2022/czech-open2022.component';
import { Yonex2022Component } from './yonex2022/yonex2022.component';
import { YonexSeniorsCup2023Component } from './yonex-seniors-cup2023/yonex-seniors-cup2023.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { YonexYouth2023Component } from './yonex-youth2023/yonex-youth2023.component';
import { RouterModule } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { CzechOpen2023Component } from './czech-open2023/czech-open2023.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    MyNavComponent,
    MailMeComponent,
    MyFooterComponent,
    CzechOpen2022Component,
    Yonex2022Component,
    YonexSeniorsCup2023Component,
    SponsorsComponent,
    YonexYouth2023Component,
    CzechOpen2023Component,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
