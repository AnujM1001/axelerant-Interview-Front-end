import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestomonialsComponent } from './testomonials.component';

describe('TestomonialsComponent', () => {
  let component: TestomonialsComponent;
  let fixture: ComponentFixture<TestomonialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestomonialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestomonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
