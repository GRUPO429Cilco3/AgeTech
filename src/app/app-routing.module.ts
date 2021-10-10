import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelpComponent } from './home/help/help.component';
import { HomeComponent } from './home/home.component';
import { InitComponent } from './home/init/init.component';
import { PillsComponent } from './home/pills/pills.component';
import { SettingComponent } from './home/setting/setting.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:"Home",component:HomeComponent ,children:[{path:"Init",component:InitComponent},
  {path:"Setting",component:SettingComponent},
  {path:"Help",component:HelpComponent},
  {path:"Pills",component:PillsComponent}]},
  {path:"Login",component:LoginComponent},
  {path: "**", redirectTo:"Login"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
