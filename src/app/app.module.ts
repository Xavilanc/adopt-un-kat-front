import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UnadoptedKittenListComponent } from './home-page/unadopted-kitten-list/unadopted-kitten-list.component';
import { UnadopedKittenItemComponent } from './home-page/unadopted-kitten-list/unadoped-kitten-item/unadoped-kitten-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    UnadoptedKittenListComponent,
    UnadopedKittenItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
