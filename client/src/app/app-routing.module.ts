import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './common/component/welcome/welcome.component';

const routes: Routes = [
  {path: "welcome", component: WelcomeComponent},
  {path: "student", component: WelcomeComponent},
  {path: "instructor", component: WelcomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
