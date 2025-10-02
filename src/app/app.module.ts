import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroeslistComponent } from './heroes/heroeslist/heroeslist.component';
import {FormsModule} from '@angular/forms';
import { HeroFilterPipe } from './heroes/hero-filter.pipe';
import { OperasBasComponent } from './formularios/operas-bas/operas-bas.component';
import { CinepolisComponent } from './formularios/cinepolis/cinepolis.component';
import { ResistenciaFilterPipe } from './resistencias/resistencia-filter.pipe';
import { ResistenciabandasComponent } from './resistencias/resistenciabandas/resistenciabandas.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroeslistComponent,
    HeroFilterPipe,
    OperasBasComponent,
    CinepolisComponent,
    ResistenciaFilterPipe,
    ResistenciabandasComponent,
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
