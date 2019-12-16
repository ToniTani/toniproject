import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { MatGridListModule } from '@angular/material/grid-list';
import {
  MatButtonModule,
  MatCardModule, MatExpansionModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatSliderModule,
  MatToolbarModule
} from '@angular/material';
import { FeedbackComponent } from './feedback/feedback.component';
import { MatSidenavModule} from '@angular/material';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexModule} from '@angular/flex-layout';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatListModule, MatFormFieldModule, MatCheckboxModule, MatInputModule } from '@angular/material';
import { ConfirmEqualValidatorDirective } from './reactive-form/confirm-equal-validator.directive';
import { AlbumsComponent } from './finnkino/albums.component';
import { PokemonService } from './service/pokemon.service';
import { PhotosComponent } from './photos/photos.component';
import { HttpClientModule } from '@angular/common/http';
import {ShortenPipe} from './finnkino/shorten.pipe';
import {NewsfilterPipe} from './finnkino/newsfilter.pipe';
import {QuestionsService} from './service/questions.service';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {environment} from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import {LoginComponent} from './login/login.component';
import {AdminComponent} from './admin/admin.component';
// import { AdminComponent } from './admin/admin.component'; [AngularFireModule.initializeApp(environment.firebase) ]

@NgModule({
    declarations: [
        AppComponent,
        CalculatorComponent,
        FeedbackComponent,
        TemplateFormComponent,
        ReactiveFormComponent,
        ConfirmEqualValidatorDirective,
        AlbumsComponent,
        PhotosComponent,
        ShortenPipe,
        NewsfilterPipe,
        AdminComponent,
      LoginComponent

    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatGridListModule,
    MatButtonModule,
    MatSliderModule,
    MatSidenavModule,
    MatCardModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatIconModule,
    FlexModule,
    ReactiveFormsModule,
    MatListModule,
    FormsModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    HttpClientModule,
    AngularFireAuthModule,
    AngularFirestoreModule

  ],
  providers: [PokemonService, QuestionsService],
  bootstrap: [AppComponent, ]
})
export class AppModule { }
