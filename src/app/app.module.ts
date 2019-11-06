import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatButtonModule, MatCardModule, MatIconModule, MatSliderModule, MatToolbarModule} from '@angular/material';
import { FeedbackComponent } from './feedback/feedback.component';
import { MatSidenavModule} from '@angular/material';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexModule} from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    FeedbackComponent,

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
    FlexModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
