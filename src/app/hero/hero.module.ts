import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeroRoutingModule } from './hero-routing.module';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from "app/hero/hero-detail/hero-detail.component";
import { HeroService } from "app/hero/hero-service";

@NgModule({
  imports: [
    CommonModule,
    HeroRoutingModule,
    FormsModule
  ],
  declarations: [HeroListComponent, HeroDetailComponent],
  providers: [HeroService]
})
export class HeroModule { }
