import {AfterViewInit, Component, ViewChild, OnInit, Input, ElementRef} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { APIService } from 'src/app/components/APIService/api.service'

@Component({
  selector: 'app-devis-api',
  templateUrl: './devis-api.component.html',
  styleUrls: ['./devis-api.component.css']
})
export class DevisAPIComponent implements AfterViewInit, OnInit {

  //Declaration des attributes avec initialisation
  resultEur: any;
  resultUsd: any;
  resultLivre: any;
  msg: string = "";
  dataSource = new MatTableDataSource<any>();  
  dataSource1 = new MatTableDataSource<any>();
  inData: {
    cur: string;
    value: any;
  }[] = [];
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  //colonnes de la datasource
  displayedColumns: string[] = ['currency', 'value'];

  constructor(private apiService : APIService ) { }

  @Input()
  length = 0;

  ngOnInit(): void {
    this.getResult();
    this.getResultAPI();
  }
  //Data proviens de l'API
  getResultAPI(){
    this.apiService.getResultAPI().subscribe(
      data => {
        if(data.rates.EUR && data.rates.USD && data.rates.GBP){
          var inData = Object.entries(data.rates).map(([cur , value]) => ({cur , value}));
          this.length = this.inData.length;
          for(let d=0; d<inData.length; d++){
            if(inData[d].cur == 'EUR' || inData[d].cur == 'USD' || inData[d].cur == 'GBP'){
              this.resultEur = inData[d].value
              this.inData.push(inData[d])
            }
            //initialisation des valeur depuis l'API
            if(inData[d].cur == 'EUR')
              this.resultEur = inData[d].value;
            if(inData[d].cur == 'USD')
              this.resultUsd = inData[d].value;
            if(inData[d].cur == 'GBP')
              this.resultLivre = inData[d].value;
          }
        }
        this.dataSource1 = new MatTableDataSource<Object>(this.inData);      
      }
    );
  }
  //Data proviens du serveur local
  getResult(){
    this.apiService.getResult().subscribe(
      data => {
        var inData = Object.entries(data.NewRates).map(([cur , value]) => ({cur, value}));
        this.dataSource = new MatTableDataSource<Object>(inData);
        this.length = inData.length;
      }
    );
  }

  //Calcule d'une somme en temps réél via les valeur de l'API
  getValueDH(v : any){
    v = v.target.value;
    if(v !== null){
      for(let d=0; d<this.inData.length; d++){
        if(this.inData[d].cur == 'EUR')
          this.resultEur = (this.inData[d].value * v).toFixed(3);
        if(this.inData[d].cur == 'USD')
          this.resultUsd = (this.inData[d].value * v).toFixed(3);
        if(this.inData[d].cur == 'GBP')
          this.resultLivre = (this.inData[d].value * v).toFixed(3);
      } 
    }
  }
}
