import { Pipe, PipeTransform } from '@angular/core';
import { Shirt} from '../shirt.model';

@Pipe({
  name: 'filterShirts'
})
export class FilterShirtsPipe implements PipeTransform {
  transform(shirts: Shirt[], size: string, color: string): Shirt[] {

    if (!size && !color) {
      return shirts;
    }
    let filtered: Shirt[] = shirts;

    if (size) {
      filtered = filtered.filter(item => {
        return (item.size === size);
      });
    }
    if (color) {
      filtered = filtered.filter(item => {
        return (item.colour === color);
      });
    }
    return filtered;
  }
}
