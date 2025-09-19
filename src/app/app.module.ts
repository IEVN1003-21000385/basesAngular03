import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroeslistComponent } from './heroes/heroeslist/heroeslist.component';
import {FormsModule} from '@angular/forms';
import { HeroFilterPipe } from './heroes/hero-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeroeslistComponent,
    HeroFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
