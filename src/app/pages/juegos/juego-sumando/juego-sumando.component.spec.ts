import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegoSumandoComponent } from './juego-sumando.component';

describe('JuegoSumandoComponent', () => {
  let component: JuegoSumandoComponent;
  let fixture: ComponentFixture<JuegoSumandoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuegoSumandoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegoSumandoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
