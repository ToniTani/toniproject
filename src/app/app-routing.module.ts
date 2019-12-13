import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Calculator} from '@angular-devkit/build-angular/src/angular-cli-files/utilities/bundle-calculator';
import {CalculatorComponent} from './calculator/calculator.component';
import {MatSliderModule} from '@angular/material/slider';
import {FeedbackComponent} from './feedback/feedback.component';
import {TemplateFormComponent} from './template-form/template-form.component';
import {ReactiveFormComponent} from './reactive-form/reactive-form.component';
import {AlbumsComponent} from './finnkino/albums.component';


const routes: Routes = [
  // { path: '' , redirectTo: '/calculator', pathMatch: 'full'},
  {path: 'calculator', component: CalculatorComponent},
  {path: 'feedback', component: FeedbackComponent},
  {path: 'template-form', component: TemplateFormComponent},
  {path: 'reactive-form', component: ReactiveFormComponent},
  {path: 'albums', component: AlbumsComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
