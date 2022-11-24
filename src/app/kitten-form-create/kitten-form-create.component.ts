import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KittenService } from '../kitten.service';
import { Kitten } from '../models/kittens';

@Component({
  selector: 'app-kitten-form-create',
  templateUrl: './kitten-form-create.component.html',
  styleUrls: ['./kitten-form-create.component.css']
})
export class KittenFormCreateComponent implements OnInit {

  imageUrlToAdd: string = '';
  kitten!: Kitten;

constructor(
    private kittenService: KittenService 
) { }

  ngOnInit(): void {
  }

  addImage() {
    this.kitten.imageUrls.push(this.imageUrlToAdd);
  }

  deleteImage(index: number): void {
    this.kitten.imageUrls.splice(index, 1);
  }

  createCat(): void {
    this.kittenService.createCat(this.kitten).subscribe(kitten => this.kitten = kitten);
  }

}
