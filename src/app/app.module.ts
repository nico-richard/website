import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DataService } from './data.service';
import { SkillComponent } from './skill/skill.component';
import { PresentationComponent } from './presentation/presentation.component';
import { ExperienceComponent } from './experience/experience.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: ':id', component: SkillComponent, outlet: 'skill' },
      // {
      //   path: 'experience/:id',
      //   component: ExperienceComponent,
      //   outlet: 'experience',
      // },
      // {
      //   path: 'portfolio/:id',
      //   component: PortfolioComponent,
      //   outlet: 'portfolio',
      // },
    ],
  },
  { path: 'xp', component: ExperienceComponent },
  { path: 'page-not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'page-not-found' },
];

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
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
