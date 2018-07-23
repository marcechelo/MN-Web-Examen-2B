import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorDeatalleComponent } from './actor-deatalle.component';

describe('ActorDeatalleComponent', () => {
  let component: ActorDeatalleComponent;
  let fixture: ComponentFixture<ActorDeatalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActorDeatalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorDeatalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
