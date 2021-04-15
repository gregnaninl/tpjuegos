import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiedraComponent } from './piedra.component';

describe('PiedraComponent', () => {
  let component: PiedraComponent;
  let fixture: ComponentFixture<PiedraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiedraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PiedraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
