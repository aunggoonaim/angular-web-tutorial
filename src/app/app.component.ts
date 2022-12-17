import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-web-tutorial';
  items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  message = [this.items.map(x => null)];

  testClick() { 
    alert(this.message[0]);
  }
}
