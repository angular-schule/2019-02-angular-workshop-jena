import { Component } from '@angular/core';

@Component({
  selector: 'br-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Book Rating!';

  /*constructor() {
    setTimeout(() => {
      this.title = 'hallo';
    }, 2000)
  }*/
}
