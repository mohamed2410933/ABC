import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRecomonationsOperationsComponent } from './all-recomonations-operations.component';

describe('AllRecomonationsOperationsComponent', () => {
  let component: AllRecomonationsOperationsComponent;
  let fixture: ComponentFixture<AllRecomonationsOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllRecomonationsOperationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllRecomonationsOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
