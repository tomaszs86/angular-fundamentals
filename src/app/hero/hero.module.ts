import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeroRoutingModule } from './hero-routing.module';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from "app/hero/hero-detail/hero-detail.component";
import { HeroService } from "app/hero/hero-service";
import { HeroDashboardComponent } from './hero-dashboard/hero-dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    HeroRoutingModule,
    FormsModule
  ],
  declarations: [HeroListComponent, HeroDetailComponent, HeroDashboardComponent],
  providers: [HeroService]
})
export class HeroModule { }
