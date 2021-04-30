import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegoTatetiComponent } from './juego-tateti.component';

describe('JuegoTatetiComponent', () => {
  let component: JuegoTatetiComponent;
  let fixture: ComponentFixture<JuegoTatetiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuegoTatetiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegoTatetiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
