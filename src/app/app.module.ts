import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ConvertisseurComponent } from './components/convertisseur/convertisseur.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { QuestionComponent } from './components/quiz/question/question.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { MatFormFieldModule } from "@angular/material/form-field";
import { ChangeBgDirective } from './change-bg.directive';
import { QuestionService } from './components/service/question.service';
import {NoRightClickDirective} from "./components/no-right-click.directive";
import { DevisAPIComponent } from './components/convertisseurAPI/devis-api/devis-api.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { APIService } from './components/APIService/api.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgChartsModule } from 'ng2-charts';
import { ChartApiComponent } from './components/chartjs/chart-api/chart-api.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ConvertisseurComponent,
    QuizComponent,
    QuestionComponent,
    ChangeBgDirective,
    NoRightClickDirective,
    DevisAPIComponent,
    ChartApiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    NgChartsModule
  ],
  providers: [QuestionService, APIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
