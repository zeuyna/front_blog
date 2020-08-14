import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTutoComponent } from './list-tuto.component';

describe('ListTutoComponent', () => {
  let component: ListTutoComponent;
  let fixture: ComponentFixture<ListTutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
