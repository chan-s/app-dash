import { Component, OnInit } from '@angular/core';

import { ChartType } from 'chart.js';
import { MultiDataSet, Label, ThemeService } from 'ng2-charts';
import { DashboardService } from 'src/app/data/dashboard.service';

import { ChartOptions, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';

import { ReporteVentas, Reporte } from "./../../../model/modelos";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  public info: any = [];
  public dimension: number = 1;
  public top : number = 5;

  // INFORMACION DE DOUNT
  public doughnutChartLabels: Label[] = [ ];
  public doughnutChartData: MultiDataSet = [ ];
  public doughnutChartType: ChartType = 'doughnut';
  public chartColors: any[] = [{ backgroundColor:["#FF7360", "#6FC8CE", "#FAFFF2", "#FFFCC4", "#B9E8E0"] }];

  // INFORMACION BAR
  public barChartLabels: Label[] = [];
  public barChartData: ChartDataSets[] = [{data : [], label : "Empleados" }];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  public reporte = new Reporte();
  public model = new ReporteVentas();

  constructor(private servicio: DashboardService) {
    this.getTopVentas();
    this.getHistory(this.model);    
  }
  
  ngOnInit() { 
  }

  onChangeCaracter(deviceValue) {
    this.dimension = deviceValue;
    this.resetVar();
    this.getTopVentas();
  }

  public getTopVentas (){
    // console.log(this.reporte)
    this.servicio.getTopVentas(this.reporte).subscribe((result:any) => {
      // console.log(result)
      result.forEach(element => {
        // console.log(element)
        this.info.push(element)
        this.doughnutChartLabels.push(element.mes)
        this.doughnutChartData.push(element.ventas)
      });
    }) 
  }

  public getHistory(model: ReporteVentas){
    this.servicio.postVentas(model).subscribe((result:any) => {
      let data:any = [];

      result.forEach(element => {
          this.barChartLabels.push(element.mes)
          data.push(element.ventas)
      });

      this.barChartData[0].data = data;
    }) 
  }

  public identificar(nombre: string){
    this.model = new ReporteVentas()
    this.resetHis();
    
    this.model.Item = this.dimension;
    this.model.nombre = nombre;

    this.getHistory(this.model)
  }

  public resetVar(){
    this.doughnutChartLabels = [];
    this.doughnutChartData = [];
    this.info = [];
  }

  public resetHis(){
    this.barChartLabels = [];
    this.barChartData[0].data = [];
  }

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
}
