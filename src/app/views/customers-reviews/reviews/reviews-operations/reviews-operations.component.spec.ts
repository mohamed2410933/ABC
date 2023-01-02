import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsOperationsComponent } from './reviews-operations.component';

describe('ReviewsOperationsComponent', () => {
  let component: ReviewsOperationsComponent;
  let fixture: ComponentFixture<ReviewsOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewsOperationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewsOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
