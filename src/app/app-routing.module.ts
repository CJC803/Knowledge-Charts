import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteBaselineComponent } from './components/route-baseline/route-baseline.component';
import { DriverBaselineComponent } from './components/driver-baseline/driver-baseline.component';
import { ComparisonStaffingComponent } from './components/comparison-staffing/comparison-staffing.component';

const routes: Routes = [
  { path: '', redirectTo: '/route-baseline', pathMatch: 'full' },
  { path: 'route-baseline', component: RouteBaselineComponent },
  { path: 'driver-baseline', component: DriverBaselineComponent },
  { path: 'comparison-staffing', component: ComparisonStaffingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
