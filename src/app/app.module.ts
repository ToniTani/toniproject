import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { MatGridListModule } from '@angular/material/grid-list';
import {
  MatButtonModule,
  MatCardModule, MatExpansionModule,
  MatIconModule, MatOptionModule,
  MatProgressSpinnerModule, MatSelectModule,
  MatSliderModule,
  MatToolbarModule
} from '@angular/material';
import { FeedbackComponent } from './feedback/feedback.component';
import { MatSidenavModule} from '@angular/material';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ExtendedModule, FlexModule} from '@angular/flex-layout';
import { TemplateFormComponent } from './template-form/template-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatListModule, MatFormFieldModule, MatCheckboxModule, MatInputModule } from '@angular/material';
import { AlbumsComponent } from './finnkino/albums.component';
import { PokemonService } from './service/pokemon.service';
import { HttpClientModule } from '@angular/common/http';
import {ShortenPipe} from './finnkino/shorten.pipe';
import {NewsfilterPipe} from './finnkino/newsfilter.pipe';
import {QuestionsService} from './service/questions.service';
import {MustMatchDirective} from './template-form/validators/must-watch.directive';
import {AdminComponent} from './admin/admin.component';
import { CurrencyCalculatorComponent } from './currency-calculator/currency-calculator.component';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { AuthComponent } from './auth/auth.component';
import { AuthService} from './auth/auth.service';


// import { AdminComponent } from './admin/admin.component'; [AngularFireModule.initializeApp(environment.firebase) ]

@NgModule({
    declarations: [
        AppComponent,
        CalculatorComponent,
        FeedbackComponent,
        TemplateFormComponent,
        ReactiveFormComponent,
        AlbumsComponent,
        ShortenPipe,
        NewsfilterPipe,
        AdminComponent,
      CurrencyCalculatorComponent,
      HeaderComponent,
      SidenavListComponent,
      ReactiveFormComponent,
      MustMatchDirective,
      AuthComponent
    ],
  imports: [

    AngularFireStorageModule,
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
    MatOptionModule,
    MatSelectModule,
    ExtendedModule,

  ],
  providers: [PokemonService, QuestionsService, AuthService],
  bootstrap: [AppComponent, ],
  schemas:   [ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
