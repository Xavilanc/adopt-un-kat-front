import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnadopedKittenItemComponent } from './unadoped-kitten-item.component';

describe('UnadopedKittenItemComponent', () => {
  let component: UnadopedKittenItemComponent;
  let fixture: ComponentFixture<UnadopedKittenItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnadopedKittenItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnadopedKittenItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
