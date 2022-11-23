import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { KittenService } from '../../../kitten.service';
import { Kitten } from '../../../models/kittens';

@Component({
  selector: 'app-kitten-details-page',
  templateUrl: './kitten-details-page.component.html',
  styleUrls: ['./kitten-details-page.component.css']
})
export class KittenDetailsPageComponent implements OnInit {

  kitten!: Kitten;

  constructor(private kittenService: KittenService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = parseInt(params.get('id') || '0');
      this.kittenService.findCatsById(id).subscribe( data => this.kitten = data);
    });
     
  }

}
