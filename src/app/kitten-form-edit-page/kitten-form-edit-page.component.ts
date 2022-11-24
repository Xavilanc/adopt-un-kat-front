import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KittenService } from '../kitten.service';
import { Kitten } from '../models/kittens';

@Component({
  selector: 'app-kitten-form-edit-page',
  templateUrl: './kitten-form-edit-page.component.html',
  styleUrls: ['./kitten-form-edit-page.component.css']
})
export class KittenFormEditPageComponent implements OnInit {

  imageUrlToAdd: string = '';
  kitten!: Kitten;

  constructor(
      private kittenService: KittenService, 
      private route: ActivatedRoute, 
      private router: Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = parseInt(params.get('id') || '0');
      this.kittenService.findCatsById(id).subscribe( data => this.kitten = data);
    }); 
  }

  add() {
    this.kitten.imageUrls.push(this.imageUrlToAdd);
  }

  delete(index: number): void {
    this.kitten.imageUrls.splice(index, 1);
  }

  updateCat() {
    this.route.paramMap.subscribe(params => {
      const id = parseInt(params.get('id') || '0');
      this.kittenService.updateCat(id, this.kitten).subscribe( data => this.kitten = data);
      this.router.navigate([''])
    });
    
  }
}

