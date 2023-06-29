import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from './components/layouts/home-layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ConfigComponent } from './components/config/config.component';
import { ChartsReportsComponent } from './components/charts-reports/charts-reports.component';
import { MapComponent } from './components/map/map.component';
import { ReceiptComponent } from './components/receipt/receipt.component';

const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'chatsreports',
        component: ChartsReportsComponent
      },
      {
        path: 'map',
        component: MapComponent
      },
      {
        path: 'receipt',
        component: ReceiptComponent
      },
      {
        path: 'config',
        component: ConfigComponent
      }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
