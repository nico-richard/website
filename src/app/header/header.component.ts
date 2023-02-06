import { Component, OnInit } from '@angular/core';
import { DataService, Section } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  sections: Section[] = [];

  constructor(
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.sections = this.dataService.sections;
  }

  onClick(i: number) {
    if (this.router.url.includes('skill/' + i)) {
      this.router.navigate(['/']);
    } else {
      this.router.navigate(['/skill', i]);
    }
  }
}
