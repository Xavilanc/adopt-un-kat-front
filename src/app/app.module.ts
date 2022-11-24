import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UnadoptedKittenListComponent } from './home-page/unadopted-kitten-list/unadopted-kitten-list.component';
import { UnadopedKittenItemComponent } from './home-page/unadopted-kitten-list/unadoped-kitten-item/unadoped-kitten-item.component';
import { KittenDetailsPageComponent } from './kitten-details-page/kitten-details-page.component';
import { KittenFormEditPageComponent } from './kitten-form-edit-page/kitten-form-edit-page.component';
import { FormsModule } from '@angular/forms';
import { KittenFormCreateComponent } from './kitten-form-create/kitten-form-create.component';
import { HeaderComponent } from './header/header.component';
import { KittenAdoptPageComponent } from './kitten-adopt-page/kitten-adopt-page.component';
import { AdoptedKittenListComponent } from './kitten-adopt-page/adopted-kitten-list/adopted-kitten-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    UnadoptedKittenListComponent,
    UnadopedKittenItemComponent,
    KittenDetailsPageComponent,
    KittenFormEditPageComponent,
    KittenFormCreateComponent,
    HeaderComponent,
    KittenAdoptPageComponent,
    AdoptedKittenListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
