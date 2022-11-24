import { Component, OnInit } from '@angular/core';
import { KittenService } from '../kitten.service';
import { Kitten } from '../models/kittens';

@Component({
  selector: 'app-kitten-form-create',
  templateUrl: './kitten-form-create.component.html',
  styleUrls: ['./kitten-form-create.component.css']
})
export class KittenFormCreateComponent implements OnInit {

  imageUrlToAdd: string = '';
  kitten: Kittens = new Kittens('', 0, '', '','', [], false);

constructor(
    private kittenService: KittenService 
) { }

  ngOnInit(): void {
  }

  addImage() {
    console.log(this.imageUrlToAdd);
    this.kitten.imageUrls.push(this.imageUrlToAdd);
  }

  deleteImage(index: number): void {
    this.kitten.imageUrls.splice(index, 1);
  }

  createCat() {
    console.log(this.kitten);
    this.kittenService.createCat(this.kitten).subscribe(kitten => console.log(kitten));
  }

}

export class Kittens {
  constructor(
    public name: string,
    public age: number,
    public color: string,
    public race: string,
    public genre: string,
    public imageUrls: string[],
    public isAdopted: boolean
    ) {}
}