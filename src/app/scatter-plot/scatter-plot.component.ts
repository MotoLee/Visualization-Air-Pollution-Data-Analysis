import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-scatter-plot',
  templateUrl: './scatter-plot.component.html'
})
export class ScatterPlotComponent implements OnInit {

  url: string = "https://motolee.github.io/Visualization-Air-Pollution-Data-Analysis/assets/scatter-plot/index.html";
  urlSafe: SafeResourceUrl;

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }
}
