import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroModule } from "app/hero/hero.module";

const routes: Routes = [
  {
    path: '',
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HeroModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
