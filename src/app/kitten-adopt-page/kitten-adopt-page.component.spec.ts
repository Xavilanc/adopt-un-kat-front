import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KittenAdoptPageComponent } from './kitten-adopt-page.component';

describe('KittenAdoptPageComponent', () => {
  let component: KittenAdoptPageComponent;
  let fixture: ComponentFixture<KittenAdoptPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KittenAdoptPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KittenAdoptPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
