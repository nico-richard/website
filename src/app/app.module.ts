import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { NavbarComponent } from './navbar/navbar.component'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { NotFoundComponent } from './not-found/not-found.component'
import { DataService } from './data.service'
import { SkillComponent } from './home/skill/skill.component'
import { PresentationComponent } from './presentation/presentation.component'
import { ExperienceComponent } from './experience/experience.component'
import { PortfolioComponent } from './portfolio/portfolio.component'
import { appRoutes } from './app.router'
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger'
import { AchievementComponent } from './achievement/achievement.component'
import { MinigamesComponent } from './minigames/minigames.component'
import { SkillsComponent } from './skills/skills.component'
import { BlogComponent } from './blog/blog.component'
import { DataComponent } from './data/data.component'
import { SectionComponent } from './section/section.component'
import { Game1Component } from './minigames/game1/game1.component'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    NotFoundComponent,
    SkillComponent,
    PresentationComponent,
    ExperienceComponent,
    PortfolioComponent,
    AchievementComponent,
    MinigamesComponent,
    SkillsComponent,
    BlogComponent,
    DataComponent,
    SectionComponent,
    Game1Component,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    LoggerModule.forRoot({
      level: NgxLoggerLevel.TRACE,
    }),
    ReactiveFormsModule,
  ],
  exports: [RouterModule],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
