import { Component } from '@angular/core';
import { Observable, of, timer } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'br-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Book Rating!';

  constructor() {
    function producer(observer) {
      observer.next(1);
      observer.next(2);

      setTimeout(() => observer.next(3), 1000);
      setTimeout(() => observer.complete(), 2000);
    }

    const myObserver = {
      next: value => console.log(value),
      error: err => console.log('ERROR', err),
      complete: () => console.log('Fertig')
    };


    const myObservable = new Observable(producer);

    // producer(myObserver);
    const sub = myObservable.subscribe(myObserver);

    /*myObservable.subscribe(
      e => console.log(e),
      err => console.error(err),
      () => console.log('COMPLETE!')
    );*/

    setTimeout(() => sub.unsubscribe(), 700);


    of('Hallo', 'Jena', ':-)')
      .subscribe(e => console.log(e));

    timer(1000, 300).pipe(
      map(e => e * 3),
      filter(e => e % 2 === 0)
    ); // .subscribe(e => console.log(e));

  }
}
