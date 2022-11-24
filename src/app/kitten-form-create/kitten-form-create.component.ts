import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KittenService } from '../kitten.service';
import { Kitten } from '../models/kittens';

@Component({
  selector: 'app-kitten-form-create',
  templateUrl: './kitten-form-create.component.html',
  styleUrls: ['./kitten-form-create.component.css']
})
export class KittenFormCreateComponent implements OnInit {

  imageUrlToAdd: string = '';
  // kitten: Kittens = new Kittens('', 0, '', '','', [], false);

  kitten: Kitten = {
    id: 0,
    name: '',
    age: 0,
    color: '',
    race: '',
    genre: '',
    imageUrls: [],
    isAdopted: false
  }

constructor(
    private kittenService: KittenService, private router: Router
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
    this.kittenService.createCat(this.kitten).subscribe(kitten => this.router.navigate(['']));
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