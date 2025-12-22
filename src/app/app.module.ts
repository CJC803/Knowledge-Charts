import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouteBaselineComponent } from './components/route-baseline/route-baseline.component';
import { DriverBaselineComponent } from './components/driver-baseline/driver-baseline.component';
import { ComparisonStaffingComponent } from './components/comparison-staffing/comparison-staffing.component';

@NgModule({
  declarations: [
    AppComponent,
    RouteBaselineComponent,
    DriverBaselineComponent,
    ComparisonStaffingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
