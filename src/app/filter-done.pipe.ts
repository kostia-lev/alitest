import { Pipe, PipeTransform } from '@angular/core';
import { ITask } from './itask';

@Pipe({
  name: 'filterDone',
  pure: false
})
export class FilterDonePipe implements PipeTransform {

  transform(tasks: ITask[], showAll: boolean): ITask[] {
    return tasks.filter((task) => (!task.done || showAll));
  }
}
