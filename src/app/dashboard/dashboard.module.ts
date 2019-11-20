import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TopicCardComponent } from './topic-card/topic-card.component';
import { Routes, RouterModule } from '@angular/router';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { SharedModule} from './../shared/shared.module';
const route: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [{
      path: 'home',
      component: DashboardHomeComponent
    },
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    },
    {
      path: '**',
      redirectTo: 'home'
    }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
]

@NgModule({
  declarations: [
    DashboardComponent,
    TopicCardComponent, DashboardHomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    SharedModule
  ]
})
export class DashboardModule { }
