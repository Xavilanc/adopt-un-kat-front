import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptedKittenListComponent } from './adopted-kitten-list.component';

describe('AdoptedKittenListComponent', () => {
  let component: AdoptedKittenListComponent;
  let fixture: ComponentFixture<AdoptedKittenListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdoptedKittenListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdoptedKittenListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
