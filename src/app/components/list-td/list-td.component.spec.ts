import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTdComponent } from './list-td.component';

describe('ListTdComponent', () => {
  let component: ListTdComponent;
  let fixture: ComponentFixture<ListTdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
