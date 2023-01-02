import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillsOperationsComponent } from './bills-operations.component';

describe('BillsOperationsComponent', () => {
  let component: BillsOperationsComponent;
  let fixture: ComponentFixture<BillsOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillsOperationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillsOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
