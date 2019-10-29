import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Calculator} from '@angular-devkit/build-angular/src/angular-cli-files/utilities/bundle-calculator';
import {CalculatorComponent} from './calculator/calculator.component';


const routes: Routes = [
  { path: '' , redirectTo: '/calculator', pathMatch: 'full'},
  {path: 'calculator', component: CalculatorComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
