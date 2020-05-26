import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http'
import { MarkdownModule } from 'ngx-markdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { ParallelCoordinateComponent } from './parallel-coordinate/parallel-coordinate.component';
import { ScatterPlotComponent } from './scatter-plot/scatter-plot.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroductionComponent,
    LineChartComponent,
    ParallelCoordinateComponent,
    ScatterPlotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MarkdownModule.forRoot(),
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
