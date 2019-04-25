import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterbooking',
})
export class FilterBookingPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (args !== undefined && args != null && args !== '') {
      return value.filter(data => (data.owner.name.toLowerCase()).indexOf(args.toLowerCase()) > -1);
    }
    return value;
  }

}
