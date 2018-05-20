import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as marked from "marked";

@Pipe({
  name: 'marked'
})
export class MarkedPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) { }

  transform(value: any, args?: any): any {
    return this.sanitizer.bypassSecurityTrustHtml(marked(value));
  }

}
