import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KittenFormEditPageComponent } from './kitten-form-edit-page.component';

describe('KittenFormEditPageComponent', () => {
  let component: KittenFormEditPageComponent;
  let fixture: ComponentFixture<KittenFormEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KittenFormEditPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KittenFormEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
