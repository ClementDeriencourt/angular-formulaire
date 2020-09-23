import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { BoutonTestComponent } from './bouton-test/bouton-test.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,

    MatButtonModule,
    MatIconModule,




  ],
  declarations: [
    AppComponent,
    HeroFormComponent,
    BoutonTestComponent,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
