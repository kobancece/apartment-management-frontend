import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './components/add-user/add-user.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TaskComponent } from './components/task/task.component';
import { TaskMenuComponent } from './components/task-menu/task-menu.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { PropertyListComponent } from './components/property-list/property-list.component';
import { PropertyDetailComponent } from './components/property-detail/property-detail.component';
import { PropertyAddComponent } from './components/property-add/property-add.component';
import { PropertyComponent } from './components/property/property.component';
import { StatisticComponent } from './components/statistic/statistic.component';
import { QueryComponent } from './components/query/query.component';

const routes: Routes = [
  { path: 'add-user', component: AddUserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, children: [
    { path: 'task', component: TaskMenuComponent, children: [
      { path: 'add', component: TaskComponent },
      { path: 'all', component: TaskListComponent },
      { path: ':id', component: TaskDetailComponent }
    ]},
    { path: 'property', component: PropertyListComponent },
    { path: 'property/add', component: PropertyAddComponent },
    { path: 'property/:id', component: PropertyDetailComponent },
    { path: 'user', component: UserListComponent },
    { path: 'user/:id', component: UserDetailComponent },
    { path: 'statistics', component: StatisticComponent },
    { path: 'query', component: QueryComponent }
  ]},
  { path: '', redirectTo: '/dashboard/task', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
