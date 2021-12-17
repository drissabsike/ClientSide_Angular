import { Component, OnInit } from '@angular/core';
import { ChartDataset } from 'chart.js';
import { APIService } from '../../APIService/api.service';
@Component({
  selector: 'app-chart-api',
  templateUrl: './chart-api.component.html',
  styleUrls: ['./chart-api.component.css']
})
export class ChartApiComponent implements OnInit {

  dataChart:any = [];
  inData: {
    cur: string;
    value: any;
  }[] = [];
  constructor(private apiService : APIService) { }

  ngOnInit(): void {
    this.getResultAPI();
  }
  
  //structure dataset de la chart
  lineChartData: ChartDataset[] = [
    { data: Array<any>() , label: 'devis'},
  ];
  
  lineChartLabels : any = [];

  lineChartOptions = {
    responsive: true,
  };

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';
  //fin dataset

  //insertion des données de l'API dans la dataset de la chart
  getResultAPI(){
    this.apiService.getResultAPI().subscribe(
      data => {
        console.log(data);
        if(data.rates.EUR && data.rates.USD && data.rates.GBP){
          //ajout des valeur from API
          this.dataChart.push(data.rates.EUR);
          this.dataChart.push(data.rates.USD)
          this.dataChart.push(data.rates.GBP)
          var inData = Object.entries(data.rates).map(([cur , value]) => ({cur , value}));
          for(let d=0; d<inData.length; d++){
            if(inData[d].cur == 'EUR' || inData[d].cur == 'USD' || inData[d].cur == 'GBP'){
              this.inData.push(inData[d]);              
              //les label de la dataset chart
              this.lineChartLabels.push(inData[d].cur);
              //affection des données a la dataset de la chart
              this.lineChartData = [];
              this.lineChartData.push({
                label : 'devis',
                data :this.dataChart
              });
            } 
          }
        }   
      }
    );    
  }  
}

