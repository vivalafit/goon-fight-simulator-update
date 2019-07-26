import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoonComponentComponent } from './goon-component.component';

describe('GoonComponentComponent', () => {
  let component: GoonComponentComponent;
  let fixture: ComponentFixture<GoonComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoonComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoonComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
