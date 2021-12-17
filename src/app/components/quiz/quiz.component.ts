import {Component, ElementRef, HostListener, Inject, OnInit, ViewChild} from '@angular/core';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  /*
  Declaration des inputs
  plus la validation d'input 'Name'
  ViewChild permet d'accéder aux directives
   */

  @ViewChild('name')
  namekey!: ElementRef;
  msg: string = "";

  constructor() {
  }

  ngOnInit(): void {
  }

  //la methode qui démarre le Quiz, avec la validation dinput nom,
  startQuiz(){
    localStorage.setItem("name", this.namekey.nativeElement.value);
    if(this.namekey.nativeElement.value==""){
      this.msg = "Le Nom est Vide !";
    }else {
      //Code Js redirect vers les questions
    window.location.href = "/question";
    }
  }

}
