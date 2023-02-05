import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DataService, Section } from '../data.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css'],
})
export class SkillComponent implements OnInit {
  id: number;
  section: Section;
  title: string;
  description: string;

  constructor(private route: ActivatedRoute, private data: DataService) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = +params.get('id')!;

      this.section = this.data.sections.filter((element) => {
        return element.title === 'Skills';
      })[0];
      this.title = this.section.list![this.id].title;
      this.description = this.section.list![this.id].description;
    });
  }
}
