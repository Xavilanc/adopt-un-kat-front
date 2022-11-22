import { Component, OnInit, Input } from '@angular/core';
import { Kitten } from 'src/app/models/kittens';

@Component({
  selector: 'app-unadoped-kitten-item',
  templateUrl: './unadoped-kitten-item.component.html',
  styleUrls: ['./unadoped-kitten-item.component.css']
})
export class UnadopedKittenItemComponent implements OnInit {

  @Input()
  kitten!: Kitten;

  constructor() { }

  ngOnInit(): void {
  }

}
