import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fullName'
})
export class FullNamePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): string {
    return value.name + ' ' + value.surname;
  }

}
