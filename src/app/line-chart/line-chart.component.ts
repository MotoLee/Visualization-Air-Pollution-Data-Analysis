import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html'
})
export class LineChartComponent implements OnInit {

  url: string = "../../assets/line-chart/index.html";
  urlSafe: SafeResourceUrl;

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }
}
