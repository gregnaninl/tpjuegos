import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegoMemotestComponent } from './juego-memotest.component';

describe('JuegoMemotestComponent', () => {
  let component: JuegoMemotestComponent;
  let fixture: ComponentFixture<JuegoMemotestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuegoMemotestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegoMemotestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
