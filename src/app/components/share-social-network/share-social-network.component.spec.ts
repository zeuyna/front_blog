import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareSocialNetworkComponent } from './share-social-network.component';

describe('ShareSocialNetworkComponent', () => {
  let component: ShareSocialNetworkComponent;
  let fixture: ComponentFixture<ShareSocialNetworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareSocialNetworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareSocialNetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
