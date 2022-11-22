import { Component, Input, OnInit } from '@angular/core';
import { KittenService } from '../../../kitten.service';
import { Kitten } from '../../../models/kittens';

@Component({
  selector: 'app-kitten-details-page',
  templateUrl: './kitten-details-page.component.html',
  styleUrls: ['./kitten-details-page.component.css']
})
export class KittenDetailsPageComponent implements OnInit {

  kitten!: Kitten;

  @Input()
  id!: number;
  

  constructor(private kittenService: KittenService) { }

  ngOnInit(): void {
    this.kittenService.findCatsById(this.id).subscribe(kitten => this.kitten = kitten);
  }

}
