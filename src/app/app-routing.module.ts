import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CitiesComponent } from './cities/cities.component';
import { MapComponent } from './map/map.component';

const routes: Routes = [
  { path: "", component: MapComponent },
  { path: "cities", component: CitiesComponent },
  { path: "dashboard", component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
