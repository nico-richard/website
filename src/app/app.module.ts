import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DataService } from './data.service';
import { SkillComponent } from './skill/skill.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: HeaderComponent,
    children: [{ path: 'skill/:id', component: SkillComponent }],
  },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'page-not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'page-not-found' },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactComponent,
    AboutComponent,
    HeaderComponent,
    NotFoundComponent,
    SkillComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
