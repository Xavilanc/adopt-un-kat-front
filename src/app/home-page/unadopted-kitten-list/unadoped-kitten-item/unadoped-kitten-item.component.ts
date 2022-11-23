import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { KittenService } from 'src/app/kitten.service';
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

  constructor(
    private router: Router, 
    private kittenService: KittenService
    ) { 
      
    }

  ngOnInit(): void {
  }

  showDetails() {
    this.router.navigate(['details', this.kitten.id]);
  }
  
  editKitten() {
    this.router.navigate(['update', this.kitten.id]);
  }

  deleteKitten(id: number) {
    this.kittenService.deleteCat(this.kitten.id).subscribe(data => this.kitten = data);
    this.router.navigate([''])
  .then(() => {
    window.location.reload();
  });
  }

  adoptKitten(id: number) {
    this.kittenService.adoptCat(this.kitten.id).subscribe(data => this.kitten = data);
    this.router.navigate([''])
  .then(() => {
    window.location.reload();
  });
  }

}
