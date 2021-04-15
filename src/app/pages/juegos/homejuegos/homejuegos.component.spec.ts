import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomejuegosComponent } from './homejuegos.component';

describe('HomejuegosComponent', () => {
  let component: HomejuegosComponent;
  let fixture: ComponentFixture<HomejuegosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomejuegosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomejuegosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
