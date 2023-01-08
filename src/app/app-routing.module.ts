import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CzechOpen2022Component } from './czech-open2022/czech-open2022.component';
import { CzechOpen2023Component } from './czech-open2023/czech-open2023.component';
import { LandingComponent } from './landing/landing.component';
import { MailMeComponent } from './mail-me/mail-me.component';
import { YonexSeniorsCup2023Component } from './yonex-seniors-cup2023/yonex-seniors-cup2023.component';
import { YonexYouth2023Component } from './yonex-youth2023/yonex-youth2023.component';
import { Yonex2022Component } from './yonex2022/yonex2022.component';

const routes: Routes = [
  { path:'', redirectTo:'/landing', pathMatch:'full' },
  { path:'landing', component:LandingComponent },
  { path:'mail-me', component:MailMeComponent },
  { path:'czech-open2022', component:CzechOpen2022Component },
  { path:'yonex2022', component:Yonex2022Component },
  { path:'yonex-seniors-cup2023', component:YonexSeniorsCup2023Component },
  { path:'yonex-youth2023', component:YonexYouth2023Component },
  { path:'czech-open2023', component:CzechOpen2023Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
