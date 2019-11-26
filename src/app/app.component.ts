import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  @ViewChild('testdiv', {static: false}) contentImg: any;
  name = 'Angular';
  public value: string;

  onPinch(event) {
    console.log(this.contentImg);
    const el = this.contentImg.nativeElement;
    console.log(event);
    console.log(event.scale);
    
    // Seulement testable une fois publier car seulement possible sur mobile
    if (event.scale > 1) {
      el.style.transform = 'scale(' +  (1 * + event.scale) + ')';
    }
  }

  test() {
    console.log('hi');
    const el = this.contentImg.nativeElement;
    // Seulement testable une fois publier car seulement possible sur mobile
    
      el.style.transform = 'scale(' + (1 * + 1.2 ) + ')';
    
  }
}
