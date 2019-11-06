import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Calculator} from '@angular-devkit/build-angular/src/angular-cli-files/utilities/bundle-calculator';
import {CalculatorComponent} from './calculator/calculator.component';
import {MatSliderModule} from '@angular/material/slider';
import {FeedbackComponent} from './feedback/feedback.component';


const routes: Routes = [
  // { path: '' , redirectTo: '/calculator', pathMatch: 'full'},
  {path: 'calculator', component: CalculatorComponent},
  {path: 'feedback', component: FeedbackComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
