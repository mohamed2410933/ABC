import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationOperationComponent } from './evaluation-operation.component';

describe('EvaluationOperationComponent', () => {
  let component: EvaluationOperationComponent;
  let fixture: ComponentFixture<EvaluationOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluationOperationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvaluationOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
