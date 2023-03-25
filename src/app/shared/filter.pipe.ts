import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], searchText: string, propName: string): any[] {
    const result :any = [];
    if (!value || searchText ==="" || propName === "") {
      return value;
    }
    searchText = searchText.toLowerCase();
    value.forEach((element: any)=>{
      if(element[propName].trim().toLowerCase().includes(searchText)){
        result.push(element);
      }
    });
    return result;
  }
}
