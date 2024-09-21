import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { NgwWowService } from 'ngx-wow';
import { CountUpOptions } from 'countup.js';
Chart.register(...registerables);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  pickANumber = 500;
  totalRequests = 369;
  failedRequests = 15;
  endVal2 = 2000;
  opts: CountUpOptions = {
    enableScrollSpy: true,
  };

  doThisOnComplete() {
    console.log('complete!');
  }

  applyEndVal() {
    this.totalRequests = Number(this.pickANumber);
  }

  useOptions() {
    this.opts = {
      decimalPlaces: 2,
      separator: ':',
      duration: 5,
    };
  }

  useOptionsAndEndVal() {
    this.opts = {
      decimalPlaces: 1,
      separator: ',',
      duration: 3,
      suffix: " Set options and endVal simultaneously!",
      startVal: this.totalRequests
    };
    this.totalRequests = 10000
  }

  resetOptions() {
    this.opts = {
      enableScrollSpy: true,
    };
  }
  requestsConfig:any = {
    type: "bar",
    data:{
      labels: ["2xx", "3xx", "4xx", "5XX"],
      datasets: [
          {
              label: "Requests",
              backgroundColor: [
                  'rgba(90, 231, 90, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(255, 99, 132, 0.2)',
              ],
              borderColor: [
                  'rgba(90, 231, 90, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(255,99,132,1)',
              ],
              borderWidth: 1,
              data: [235, 9, 80, 60],
          }
      ]
  },
    options:{
      aspectRatio:1,
      indexAxis: 'y',
    },
  };
  topStatusConfig:any = {
    type: "bar",
    data:{
      labels: ["200", "302", "400", "404"],
      datasets: [
          {
              label: "Top Status Code",
              backgroundColor: [
                  'rgba(90, 231, 90, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(255, 99, 132, 0.2)',
              ],
              borderColor: [
                  'rgba(90, 231, 90, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(255,99,132,1)',
              ],
              borderWidth: 1,
              data: [235, 9, 80, 60],
          }
      ]
  },
    options:{
      aspectRatio:1,
      indexAxis: 'y',
    },
  };
  topPathsConfig:any ={
    type: "bar",

    data:{
      labels: ["/", "/direct/inbox/", "/feed/", "/profile"],
      datasets: [
          {
              label: "Top Paths",
              backgroundColor: [
                  'rgba(90, 231, 90, 0.2)',

              ],
              borderColor: [
                  'rgba(90, 231, 90, 1)',
              ],
              borderWidth: 1,
              data: [235, 9, 80, 60],
          }
      ]
    },
    options:{
      aspectRatio:1,
      indexAxis: 'y',
    }
  };
  topClientIpsConfig:any ={
    type: "bar",

    data:{
      labels: ["127.0.0.1"],
      datasets: [
          {
              label: "top Client Ips",
              backgroundColor: [
                'rgba(90, 231, 90, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                'rgba(90, 231, 90, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(255,99,132,1)',
            ],
              borderWidth: 1,
              data: [235, 9, 80, 60],
          }
      ]
    },
    options:{
      aspectRatio:1,
      indexAxis: 'y',
    }
  };
  requests:any;
  topPaths:any;
  topStatusCode:any
  topClientIps:any
  constructor(private wowService: NgwWowService) {}
  ngOnInit(){
    this.createChart();
    this.wowService.init();
  }
  ngAfterViewInit(){

  }
  createChart(){
    this.requests = new Chart('Requests', this.requestsConfig);
    this.topStatusCode = new Chart('TopStatus', this.topStatusConfig)
    this.topPaths = new Chart('TopPaths',this.topPathsConfig)
    this.topClientIps = new Chart('topClientIps',this.topClientIpsConfig)
  }
}
