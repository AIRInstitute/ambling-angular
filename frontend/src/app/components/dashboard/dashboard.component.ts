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

interface Time {
  value: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent {

  public chartOptionsWaterConsumption: Partial<ChartOptions> | any;
  public chartOptionsMonthlyConsumption: Partial<ChartOptions> | any;

  selectedTimeWater: string = "Last 6 months";
  selectedTimeMonthly: string = "Last 6 months";
  timeFilter: Time[] = [
    {value: 'Today'},
    {value: 'Last week'},
    {value: 'Last 6 months'},
    {value: 'Last year'},
    {value: 'all'},
  ];

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
        height: 330,
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
      colors: ["#000000", "#acc4de"],
      dataLabels: {
        enabled: true
      },
      stroke: {
        curve: "smooth"
      },
      grid: {
        borderColor: "#c2deff"
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
      colors: ["#000000", "#acc4de"],
      chart: {
        height: 330,
        type: "bar"
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
