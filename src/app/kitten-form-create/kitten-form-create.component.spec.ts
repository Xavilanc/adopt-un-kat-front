import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KittenFormCreateComponent } from './kitten-form-create.component';

describe('KittenFormCreateComponent', () => {
  let component: KittenFormCreateComponent;
  let fixture: ComponentFixture<KittenFormCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KittenFormCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KittenFormCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
