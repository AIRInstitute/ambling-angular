import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

import { HomeLayoutComponent } from './components/layouts/home-layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ConfigComponent } from './components/config/config.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { DialogLogoutComponent } from './components/dialogs/dialog-logout/dialog-logout.component';
import { DialogErrorComponent } from './components/dialogs/dialog-error/dialog-error.component';

import { NgApexchartsModule } from "ng-apexcharts";
import { MapComponent } from './components/map/map.component';
import { ChartsReportsComponent } from './components/charts-reports/charts-reports.component';
import { ReceiptComponent } from './components/receipt/receipt.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeLayoutComponent,
    DashboardComponent,
    ConfigComponent,
    ToolbarComponent,
    DialogLogoutComponent,
    DialogErrorComponent,
    MapComponent,
    ChartsReportsComponent,
    ReceiptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgFor,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatDividerModule,
    MatDialogModule,
    MatSidenavModule,
    NgApexchartsModule,
    MatFormFieldModule, 
    MatSelectModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
