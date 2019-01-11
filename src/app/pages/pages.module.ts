import { NgModule } from '@angular/core';
// Modulo
import { SharedModule } from '../shared/shared.modulo';
// Componentes
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PAGES_ROUTES } from './pages.router';

@NgModule ({
declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component
],
exports: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component

],
imports : [
    SharedModule,
    PAGES_ROUTES
]
})

export class PagesModule { }

