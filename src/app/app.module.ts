import { NgModule } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskComponent } from './task/task.component';
import { FilterDonePipe } from './filter-done.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TaskComponent,
    FilterDonePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
