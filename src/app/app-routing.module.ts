import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CzechOpen2022Component } from './czech-open2022/czech-open2022.component';
import { LandingComponent } from './landing/landing.component';
import { MailMeComponent } from './mail-me/mail-me.component';
import { YonexSeniorsCup2023Component } from './yonex-seniors-cup2023/yonex-seniors-cup2023.component';
import { Yonex2022Component } from './yonex2022/yonex2022.component';

const routes: Routes = [
  { path:'', redirectTo:'LandingComponent', pathMatch:'full' },
  { path:'LandingComponent', title:'landing', component:LandingComponent },
  { path:'mail-me', title:'mail-me', component:MailMeComponent },
  { path:'czech-open2022', title:'czech-open2022', component:CzechOpen2022Component },
  { path:'yonex2022', title:'yonex2022', component:Yonex2022Component },
  { path:'yonex-seniors-cup2023', title:'yonex-seniors-cup2023', component:YonexSeniorsCup2023Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
