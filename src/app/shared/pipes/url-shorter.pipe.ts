import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'urlShorter'
})
export class UrlShorterPipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {
    let urlRegex = /(https?:\/\/[^\s]+)/g;
    return value.replace(urlRegex, (url) => {
        return `<a href='${url}' target="_blank">Click Here</a>`;
    });
  }

}
