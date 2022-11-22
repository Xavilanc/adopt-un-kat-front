import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KittenDetailsPageComponent } from './kitten-details-page.component';

describe('KittenDetailsPageComponent', () => {
  let component: KittenDetailsPageComponent;
  let fixture: ComponentFixture<KittenDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KittenDetailsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KittenDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
