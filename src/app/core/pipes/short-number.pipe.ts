import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortNumber'
})
export class ShortNumberPipe implements PipeTransform {

  transform(bigNumber: number): string {
    if(bigNumber > 1000000)
      return (bigNumber / 1000000).toFixed(1) +'M';
    if(bigNumber > 1000)
      return (bigNumber / 1000).toFixed(1) +'K';
    return bigNumber.toFixed(0);
  }

}
