import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import * as c3 from 'c3';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  @ViewChild('chart') chart: ElementRef;
  constructor() {

  }

  ngOnInit() {
    let chartArea = this.chart.nativeElement;
    c3.generate({
      bindto: chartArea,
      data: {
        columns: [
          ['data1', 30, 200, 100, 400, 150, 250],
          ['data2', 50, 20, 10, 40, 15, 25]
        ]
      }
    })
  }

}
