import { Component } from "@angular/core";

import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexGrid,
  ApexLegend,
  ApexMarkers,
  ApexStroke,
  ApexYAxis,
  ApexFill
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  colors: string[];
  yaxis: ApexYAxis;
  grid: ApexGrid;
  legend: ApexLegend;
  title: ApexTitleSubtitle;
  fill: ApexFill;
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent {

  public chartOptionsWaterConsumption: Partial<ChartOptions> | any;
  public chartOptionsMonthlyConsumption: Partial<ChartOptions> | any;

  ngOnInit(): void {
    this.initializeChartWaterConsumption();
    this.initializeChartMonthlyConsumption();
  }

  initializeChartWaterConsumption() {
    this.chartOptionsWaterConsumption = {
      series: [
        {
          name: "Consumed",
          data: [754, 310, 620, 535, 632, 405 ]
        },
        {
          name: "Machin Learning Model",
          data: [600, 411, 584, 718, 617, 986]
        }
      ],
      chart: {
        height: 400,
        type: "area",
        dropShadow: {
          enabled: true,
          color: "#000",
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2
        }
      },
      colors: ["#f08013", "#4b2c0d"],
      dataLabels: {
        enabled: true
      },
      stroke: {
        curve: "smooth"
      },
      title: {
        text: "WATER CONSUMPTION (Lt.)",
        align: "center"
      },
      grid: {
        borderColor: "#f5b371",
        row: {
          colors: ["#f1d6ba", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      markers: {
        size: 1
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.3,
          opacityTo: 0,
          stops: [0, 90, 100]
        }
      },
      xaxis: {
        categories: ["Nov", "Dic","Jan", "Feb", "Mar", "Apr"],
        tickPlacement: "on",
      },
      yaxis: {
        title: {
          text: "litros"
        },
        min: 200,
        max: 1000
      },
    };
  }

  initializeChartMonthlyConsumption() {
    this.chartOptionsMonthlyConsumption = {
      series: [
        {
          name: "Current usage",
          data: [18945, 23547, 24879, 24569, 19987, 16235]
        },
        {
          name: "Normal usage",
          data: [12784, 10547, 11658, 14526, 19854, 20047]
        }
      ],
      colors: ["#f08013", "#4b2c0d"],
      chart: {
        height: 400,
        type: "bar"
      },
      title: {
        text: "Monthly CONSUMPTION (Lt.)",
        align: "center"
      },
      xaxis: {
        categories: ["Nov", "Dic",  "Jan",  "Feb",  "Mar",  "Apr"],
        tickPlacement: "on"
      },
      yaxis: {
        title: {
          text: "litros"
        },
        min: 5000,
        max: 25000
      },
    };
  }

}
