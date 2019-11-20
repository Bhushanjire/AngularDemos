import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgclassDemoComponent } from './ngclass-demo.component';

describe('NgclassDemoComponent', () => {
  let component: NgclassDemoComponent;
  let fixture: ComponentFixture<NgclassDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgclassDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgclassDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
