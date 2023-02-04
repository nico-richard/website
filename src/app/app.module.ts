import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
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
    HomeComponent,
    NotFoundComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
