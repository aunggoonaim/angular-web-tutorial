import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  standalone: true,
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css'],
  imports: [
    MatIconModule
  ]
})
export class LoadingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
