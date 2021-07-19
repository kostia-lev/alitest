import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';
import {
  Subject,
  Subscription
} from 'rxjs';
import {
  debounceTime,
  throttleTime
} from 'rxjs/operators';
import { ITask } from '../itask';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit, OnDestroy {

  @Input() task: ITask;
  @Output() click = new EventEmitter();
  public clickSubject = new Subject();
  private clickSubjectSub: Subscription;
  constructor() { }

  ngOnInit(): void {
    this.clickSubjectSub = this.clickSubject.pipe(debounceTime(500)).subscribe(() => {
      this.click.emit();
    })
  }

  ngOnDestroy() {
    if (this.clickSubjectSub) {
      this.clickSubject.unsubscribe();
    }
  }

  taskClick($event: Event) {
    this.clickSubject.next();
    $event.preventDefault();
  }

}
