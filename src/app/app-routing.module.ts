import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { MailMeComponent } from './mail-me/mail-me.component';

const routes: Routes = [
  { path:'', redirectTo:'LandingComponent', pathMatch:'full' },
  { path:'LandingComponent', title:'landing', component:LandingComponent },
  { path:'mail-me', title:'mail-me', component:MailMeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
