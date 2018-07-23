import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorGeneralComponent } from './actor-general.component';

describe('ActorGeneralComponent', () => {
  let component: ActorGeneralComponent;
  let fixture: ComponentFixture<ActorGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActorGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
