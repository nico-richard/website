import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css'],
})
export class SkillComponent implements OnInit {
  id: number;
  title: string;
  description: string;

  constructor(private route: ActivatedRoute, private data: DataService) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = +params.get('id')!;

      this.title = this.data.sections.skill.list![this.id].title;
      this.description = this.data.sections.skill.list![this.id].description;
    });
  }
}
