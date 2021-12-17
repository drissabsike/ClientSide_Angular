import { Component, OnInit } from '@angular/core';
import {QuestionService} from "../../service/question.service";
import {interval} from "rxjs";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  /*
  * DB : Json File => assets/questions.json
  * Declaration des attributes
  * Initialisation
   */

  active="../../../assets/happyfrag.jpg";
  Dactive="../../../assets/frag.jpg";

  public name: string="";
  //Liste des Questions
  public questionList : any = [];

  //id de la question en cours
  public currentQuestion:number = 0;

  //Les points
  public points: number=0;
  progress:string="0";
  counter=30;
  interval$: any;
  //Quiz Terminé
  isQuizCompleted : boolean = false;

  correctAnswer: number = 0;
  inCorrectAnswer: number = 0;

  //Injection du Service
  constructor(private questionService: QuestionService) { }

  //Les methode qui execute au débute
  ngOnInit(): void {
    this.name = localStorage.getItem("name")!;
    this.getAllQuestions();
    this.startCounter();
  }

  //recuperation des questions
  getAllQuestions(){
    this.questionService.getQuestionJson()
      .subscribe(res => {
        //console.log(res.questions);
        //enregistrement des questions du fichier JSON sur la liste
        this.questionList = res.questions;
      })
  }

  //question suivant
  nextQuestion(){
    this.currentQuestion++;
  }

  //question avant
  previousQuestion(){
    this.currentQuestion--;
  }

  /*
  * La validation des réponses
  * La Qestion correct : Plus 10 point
  * Passé au question suivant
   */

  answer(currentQno: number, option:any){
    if(currentQno === this.questionList.length){
      this.isQuizCompleted = true;
      this.stopCounter();
    }
    if(option.correct){
        this.points += 10;
        this.correctAnswer++;
        setTimeout(() => {
          this.currentQuestion++;
          this.resetCounter();
          this.getProgressPercent();
        }, 1000);

      }else {
       setTimeout(() => {
         this.currentQuestion++;
         this.inCorrectAnswer++;
         this.resetCounter();
         this.getProgressPercent();
       }, 1000);
      }
  }

  // Chronometer ###################### Demarage du Chrono , Timer (60 sec)
  startCounter(){
    this.interval$ = interval(1000)
      .subscribe(val=>{
        this.counter--;
        if(this.counter===0){
          this.currentQuestion++;
          this.counter=30;
          this.points-=10;
        }
      });
    setTimeout(() => {
        this.interval$.unsubscribe();
      }, 3000000);
    }

    //Stop Chrono
  stopCounter(){
    this.interval$.unsubscribe();
    this.counter=0;
  }

  //Redemaré le chrono
  resetCounter(){
    this.stopCounter();
    this.counter=30;
    this.startCounter();
  }

  //Redmar" le Quiz
  resetQuiz(){
    this.resetCounter();
    this.getAllQuestions();
    this.points=0;
    this.counter=30;
    this.currentQuestion=0;
    this.progress = "0";
  }

  //Affectation la taille des question (9 question) avec le progress sur l'affichage
  getProgressPercent(){
    this.progress = ((this.currentQuestion/this.questionList.length)*100).toString();
    return this.progress;
  }


}
