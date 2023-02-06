import { Component, OnInit } from '@angular/core';
import { DataService, Section } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  header: Section;
  presentation: Section;
  skill: Section;
  experience: Section;
  portfolio: Section;

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit() {
    this.skill = this.dataService.sections.skill;
    this.presentation = this.dataService.sections.presentation;
    this.experience = this.dataService.sections.experience;
    this.portfolio = this.dataService.sections.portfolio;
  }

  onClick(i: number) {
    this.router.url.includes('skill')
      ? this.router.navigate(['/', { outlets: { skill: null } }])
      : this.router.navigate(['/', { outlets: { skill: [i] } }]);
  }
}
