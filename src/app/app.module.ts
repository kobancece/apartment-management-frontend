import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TaskComponent } from './components/task/task.component';
import { TaskMenuComponent } from './components/task-menu/task-menu.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';
import { PropertyComponent } from './components/property/property.component';
import { UserComponent } from './components/user/user.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { PropertyListComponent } from './components/property-list/property-list.component';
import { PropertyDetailComponent } from './components/property-detail/property-detail.component';
import { PropertyAddComponent } from './components/property-add/property-add.component';
import { BackButtonComponent } from './components/back-button/back-button.component';
import { StatisticComponent } from './components/statistic/statistic.component';
import { QueryComponent } from './components/query/query.component';

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    LoginComponent,
    DashboardComponent,
    TaskComponent,
    TaskMenuComponent,
    TaskListComponent,
    TaskDetailComponent,
    PropertyComponent,
    UserComponent,
    UserListComponent,
    UserDetailComponent,
    PropertyListComponent,
    PropertyDetailComponent,
    PropertyAddComponent,
    BackButtonComponent,
    StatisticComponent,
    StatisticComponent,
    QueryComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
