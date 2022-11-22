import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { KittenDetailsPageComponent } from './kitten-details-page/kitten-details-page.component';


const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: '/details',
    component: KittenDetailsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
