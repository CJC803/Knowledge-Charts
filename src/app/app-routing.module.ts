import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { KnowledgeChartsComponent } from './components/knowledge-charts/knowledge-charts.component';
import { RouteBaselineComponent } from './components/route-baseline/route-baseline.component';
import { DriverBaselineComponent } from './components/driver-baseline/driver-baseline.component';
import { ComparisonStaffingComponent } from './components/comparison-staffing/comparison-staffing.component';

const routes: Routes = [
  { path: '', redirectTo: 'knowledge-charts', pathMatch: 'full' },

  {
    path: 'knowledge-charts',
    component: KnowledgeChartsComponent,
    children: [
      { path: '', redirectTo: 'routes', pathMatch: 'full' },
      { path: 'routes', component: RouteBaselineComponent },
      { path: 'drivers', component: DriverBaselineComponent },
      { path: 'comparison', component: ComparisonStaffingComponent }
    ]
  },

  // fallback
  { path: '**', redirectTo: 'knowledge-charts' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
