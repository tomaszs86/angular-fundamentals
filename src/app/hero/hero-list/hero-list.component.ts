import { Component, OnInit } from '@angular/core';
import { Hero } from "app/hero/hero";
import { HeroService } from "app/hero/hero-service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  selectedHero: Hero;
  title = 'Tour of Heroes';
  heroes: Hero[];

  constructor(private heroService: HeroService, private router: Router) { }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }

  gotoDetail(): void {
    this.router.navigate(['/heroes/', this.selectedHero.id]);
  }

}
