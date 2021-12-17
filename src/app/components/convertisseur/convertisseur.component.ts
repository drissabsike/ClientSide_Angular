import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convertisseur',
  templateUrl: './convertisseur.component.html',
  styleUrls: ['./convertisseur.component.css']
})
export class ConvertisseurComponent implements OnInit {


  //Declaration des attributes avec initialisation
  resultEur: string = "0.096";
  resultUsd: string = "0.11";
  resultLivre: string = "0.082";
  resultLira: string = "1.49";
  resultCanad: string = "0.14";
  resultWon: string = "128.14";
  resultYen: string = "12.35";
  msg: string = "";

  /*
  *la Methode qui a un paramètre de type String
  *La covertion de type string to Number
  * Initialisation avec des Zero pour l'affichage
  * le Calcule des devis
  * envoyer les résultats vers la page web (Input en Read Only)
  */

  getValueDH(value: string){
    if (value==""){
      this.msg="Le champ est vide !";
      this.resultEur ="0";
      this.resultUsd ="0";
      this.resultLivre ="0";
      this.resultLira ="0";
      this.resultCanad ="0";
      this.resultWon = "0";
      this.resultYen = "0";
    }else {
        this.msg="";
        const val= Number(value)*0.096
        const val2= Number(value)*0.11
        const val3= Number(value)*0.082
        const val4= Number(value)*1.49
        const val5= Number(value)*0.14
        const val6= Number(value)*128.14
        const val7= Number(value)*12.35

        this.resultEur = (val).toFixed(3);
        this.resultUsd = (val2).toFixed(3);
        this.resultLivre = (val3).toFixed(3);
        this.resultLira = (val4).toFixed(3);
        this.resultCanad = (val5).toFixed(3);
        this.resultWon = (val6).toFixed(3);
        this.resultYen = (val7).toFixed(3);

    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
