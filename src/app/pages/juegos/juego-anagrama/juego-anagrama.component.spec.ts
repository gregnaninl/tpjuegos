import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegoAnagramaComponent } from './juego-anagrama.component';

describe('JuegoAnagramaComponent', () => {
  let component: JuegoAnagramaComponent;
  let fixture: ComponentFixture<JuegoAnagramaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuegoAnagramaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegoAnagramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
