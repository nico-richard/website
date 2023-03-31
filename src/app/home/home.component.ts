import { Component, OnInit } from '@angular/core'
import { DataService, Section } from '../data.service'
import { NavigationStart, Router } from '@angular/router'
import { NGXLogger } from 'ngx-logger'
import { filter } from 'rxjs'

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: [
        './home.component.sass',
        // './home.component2.sass',
    ],
})
export class HomeComponent implements OnInit {
    header: Section
    presentation: Section
    skill: Section
    experience: Section
    portfolio: Section

    constructor(
        private dataService: DataService,
        private router: Router,
        private logger: NGXLogger
    ) {
        router.events
            .pipe(filter((event) => event instanceof NavigationStart))
            .subscribe((event) => {
                this.logger.trace(`Router event : ${event}`)
            })
    }

    ngOnInit() {
        this.skill = this.dataService.sections.skill
        this.presentation = this.dataService.sections.presentation
        this.experience = this.dataService.sections.experience
        this.portfolio = this.dataService.sections.portfolio
        this.logger.debug(`Component Home initialized`)
    }

    onSelectSkill(i: number) {
        if (this.router.url.includes(`skill:${i}`)) {
            this.logger.debug(`Skill ${i} deselected`)
            this.router.navigate(['/', { outlets: { skill: null } }])
        } else {
            this.logger.debug(`Skill ${i} selected`)
            this.router.navigate(['/', { outlets: { skill: [i] } }])
        }
    }
}
