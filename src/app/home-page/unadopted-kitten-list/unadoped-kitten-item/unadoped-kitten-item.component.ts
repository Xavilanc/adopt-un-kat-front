import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Kitten } from 'src/app/models/kittens';

@Component({
  selector: 'app-unadoped-kitten-item',
  templateUrl: './unadoped-kitten-item.component.html',
  styleUrls: ['./unadoped-kitten-item.component.css']
})
export class UnadopedKittenItemComponent implements OnInit {

  kittenId!: number;

  @Input()
  kitten!: Kitten;

  @Output()
  sendIdToParent: EventEmitter<number> = new EventEmitter();

  SendId(): void {
    this.sendIdToParent.emit(this.kittenId = this.kitten.id);
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  showDetails() {
    this.router.navigate(['details', this.kitten.id]);
  } 

}
