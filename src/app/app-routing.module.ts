import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ConvertisseurComponent} from "./components/convertisseur/convertisseur.component";
import {QuizComponent} from "./components/quiz/quiz.component";
import {QuestionComponent} from "./components/quiz/question/question.component";
import { DevisAPIComponent } from './components/convertisseurAPI/devis-api/devis-api.component';
import { ChartApiComponent } from './components/chartjs/chart-api/chart-api.component';

//Configuration des URLs
const routes: Routes = [
  {path: "", redirectTo:"convertisseur", pathMatch: "full"},
  {path: "convertisseur", component:ConvertisseurComponent},
  {path: "question", component:QuestionComponent},
  {path: "quiz", component:QuizComponent},
  {path: "convertisseurApi", component:DevisAPIComponent}, //ChartApiComponent
  {path: "chart", component:ChartApiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
