import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from "@angular/router";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';



const routes: Routes = [
  {
    path: "dogs",
    loadChildren: () => import("./dogs/dogs.module").then(m => m.DogsModule)
  },

  {
    path: "cats",
    loadChildren: () => import("./cats/cats.module").then(m => m.CatsModule)

  },

  {
    path: "people",
    loadChildren: () => import("./people/people.module").then(m => m.PeopleModule)
  }

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
