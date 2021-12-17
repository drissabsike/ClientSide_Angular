import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class QuestionService {

  //injection le HttpClientservice en tant que dépendance
  constructor(private  http: HttpClient) { }

  //Récuperation la liste des Questios avec GET
  getQuestionJson(){
    return this.http.get<any>("assets/questions.json");
  }

}
