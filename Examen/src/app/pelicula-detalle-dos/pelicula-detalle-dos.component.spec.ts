import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculaDetalleDosComponent } from './pelicula-detalle-dos.component';

describe('PeliculaDetalleDosComponent', () => {
  let component: PeliculaDetalleDosComponent;
  let fixture: ComponentFixture<PeliculaDetalleDosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeliculaDetalleDosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculaDetalleDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
