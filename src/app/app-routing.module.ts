import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { KittenDetailsPageComponent } from './kitten-details-page/kitten-details-page.component';
import { KittenFormCreateComponent } from './kitten-form-create/kitten-form-create.component';
import { KittenFormEditPageComponent } from './kitten-form-edit-page/kitten-form-edit-page.component';


const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'details/:id',
    component: KittenDetailsPageComponent
  },
  {
    path: 'update/:id',
    component: KittenFormEditPageComponent
  },
  {
    path: 'create',
    component: KittenFormCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
