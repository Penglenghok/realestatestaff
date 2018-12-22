import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { DashboardNavComponent } from './components/dashboard-nav/dashboard-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './module/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MobxAngularModule } from 'mobx-angular';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LayoutComponent,
    DashboardNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    MobxAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
