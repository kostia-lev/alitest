import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { ITask } from '../itask';
import * as uuid from 'uuid';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor() { }

  public showAll = false;
  public tasks: ITask[] = [
    {name: 'Example task', description: 'what I should do', done: false, id: uuid.v4()}
  ];
  public form = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
  }

  taskClicked(i: number) {
    this.tasks[i] = {...this.tasks[i], done: !this.tasks[i].done};
  }

  addTask(event: Event) {
    const name = this.form.get('name')?.value;
    const description = this.form.get('description')?.value;
    this.tasks.push({name, description, done: false, id: uuid.v4()});
    this.form.reset()
    event.preventDefault();
  }

  trackByFn(index: number, task: ITask) {
    return task;
  }
}
