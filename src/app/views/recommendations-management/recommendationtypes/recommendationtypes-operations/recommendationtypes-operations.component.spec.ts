import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendationtypesOperationsComponent } from './recommendationtypes-operations.component';

describe('RecommendationtypesOperationsComponent', () => {
  let component: RecommendationtypesOperationsComponent;
  let fixture: ComponentFixture<RecommendationtypesOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecommendationtypesOperationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecommendationtypesOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
