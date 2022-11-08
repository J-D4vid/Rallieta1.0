import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CafeteriaComponent } from './cafeteria/cafeteria.component';
import { DelicatessenComponent } from './delicatessen/delicatessen.component';
import { MizanPlassComponent } from './mizan-plass/mizan-plass.component';
import { NavComponent } from './nav/nav.component';

const routes: Routes = [
  {path: '', component: NavComponent},
  {path: 'delicatesse', component: DelicatessenComponent},
  {path: 'cafeteria', component:CafeteriaComponent},
  {path: 'mizan', component:MizanPlassComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
