import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CalculatorComponent} from './calculator/calculator.component';
import {MatSliderModule} from '@angular/material/slider';
import {FeedbackComponent} from './feedback/feedback.component';
import {TemplateFormComponent} from './template-form/template-form.component';
import {AlbumsComponent} from './finnkino/albums.component';
// import {LoginComponent} from './login/login.component';
import {AdminComponent} from './admin/admin.component';
import {CurrencyCalculatorComponent} from './currency-calculator/currency-calculator.component';
import * as firebase from 'firebase/app';
import {ReactiveFormComponent} from './reactive-form/reactive-form.component';
import {AuthComponent} from './auth/auth.component';
import {AuthGuard} from './auth/auth.guard';


const routes: Routes = [
  { path: '' , redirectTo: '/calculator', pathMatch: 'full'},
  {path: 'calculator', component: CalculatorComponent},
  {path: 'feedback', component: FeedbackComponent},
  {path: 'template-form', component: TemplateFormComponent},
  {path: 'reactive-form', component: ReactiveFormComponent},
  {path: 'albums', component: AlbumsComponent},
 // {path: 'login', component: LoginComponent},
  {path: 'currency', component: CurrencyCalculatorComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'admin', component: AdminComponent, canActivate: [AuthGuard]}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ ]
})
export class AppRoutingModule { }
