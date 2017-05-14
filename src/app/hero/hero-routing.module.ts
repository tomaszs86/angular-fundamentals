import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroListComponent } from "app/hero/hero-list/hero-list.component";
import { HeroDetailComponent } from "app/hero/hero-detail/hero-detail.component";
import { HeroDashboardComponent } from "app/hero/hero-dashboard/hero-dashboard.component";

const routes: Routes = [

{ path: '', redirectTo: 'dashboard', pathMatch: 'full' },
{ path: 'dashboard',  component: HeroDashboardComponent },
{ path: 'heroes/:id', component: HeroDetailComponent },
{ path: 'heroes', component: HeroListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroRoutingModule { }
