import { Pipe, PipeTransform, Injectable } from "@angular/core";

@Pipe({
  name: "searchPipe",
})
@Injectable()
export class SearchPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (!value) return null;
    if (!args) return value;

    args = args.toLowerCase();

    return value.filter(function (item) {
      return JSON.stringify(item).toLowerCase().includes(args);
    });
  }
}