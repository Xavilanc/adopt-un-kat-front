import { Component, OnInit } from '@angular/core';
import { KittenService } from 'src/app/kitten.service';
import { Kitten } from 'src/app/models/kittens';

@Component({
  selector: 'app-unadopted-kitten-list',
  templateUrl: './unadopted-kitten-list.component.html',
  styleUrls: ['./unadopted-kitten-list.component.css']
})
export class UnadoptedKittenListComponent implements OnInit {

  unadoptedKittens: Kitten[] = [];

  kittenId!: number;

  addKittenId(kittenId: number) {
    this.kittenId = kittenId;
  }

  constructor(private kittenService: KittenService) { }

  ngOnInit(): void {
    this.kittenService.findAllUnadoptedCats().subscribe(kittens => this.unadoptedKittens = kittens);
  }

}
