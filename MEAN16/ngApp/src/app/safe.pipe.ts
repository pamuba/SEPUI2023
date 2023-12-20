import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {
 constructor(private sanitize:DomSanitizer){}
  transform(url:any) {
    return this.sanitize.bypassSecurityTrustResourceUrl(url);
  }

}
