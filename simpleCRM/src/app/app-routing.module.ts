import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeadsComponent } from './leads/leads.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';



const routes: Routes = [
  {
    path: 'leads',
    component: LeadsComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: 'profiles_info',
    component: ProfileComponent
  }
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
