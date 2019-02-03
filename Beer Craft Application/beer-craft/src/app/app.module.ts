import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeersFilterPipe } from './beers-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BeersFilterPipe
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
