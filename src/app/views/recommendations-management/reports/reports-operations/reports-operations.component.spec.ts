import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsOperationsComponent } from './reports-operations.component';

describe('ReportsOperationsComponent', () => {
  let component: ReportsOperationsComponent;
  let fixture: ComponentFixture<ReportsOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportsOperationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportsOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
