import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent  },
  { path :'Services', component : ServicesComponent},
  { path : 'about_us', component : AboutUsComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**',component:NotFoundComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HomeComponent,
    ServicesComponent,
    AboutUsComponent,
    ContactComponent,
    NotFoundComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule { }
