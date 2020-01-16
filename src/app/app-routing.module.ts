import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Calculator} from '@angular-devkit/build-angular/src/angular-cli-files/utilities/bundle-calculator';
import {CalculatorComponent} from './calculator/calculator.component';
import {MatSliderModule} from '@angular/material/slider';
import {FeedbackComponent} from './feedback/feedback.component';
import {TemplateFormComponent} from './template-form/template-form.component';
import {AlbumsComponent} from './finnkino/albums.component';
import {PhotosComponent} from './photos/photos.component';
import {LoginComponent} from './login/login.component';
import {AdminComponent} from './admin/admin.component';
import {AuthGuard} from './service/auth.guard';
import {CurrencyCalculatorComponent} from './currency-calculator/currency-calculator.component';
import * as firebase from 'firebase/app';
import {ReactiveFormComponent} from './reactive-form/reactive-form.component';



const routes: Routes = [
  { path: '' , redirectTo: '/calculator', pathMatch: 'full'},
  {path: 'calculator', component: CalculatorComponent},
  {path: 'feedback', component: FeedbackComponent},
  {path: 'template-form', component: TemplateFormComponent},
  {path: 'reactive-form', component: ReactiveFormComponent},
  {path: 'albums', component: AlbumsComponent},
  {path: 'photos', component: PhotosComponent},
  {path: 'login', component: LoginComponent},
  {path: 'currency', component: CurrencyCalculatorComponent},
  {path: 'admin', component: AdminComponent, canActivate: [AuthGuard]}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ AuthGuard ]
})
export class AppRoutingModule { }
