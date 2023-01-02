import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowMarkterComponent } from './follow-markter.component';

describe('FollowMarkterComponent', () => {
  let component: FollowMarkterComponent;
  let fixture: ComponentFixture<FollowMarkterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FollowMarkterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FollowMarkterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
