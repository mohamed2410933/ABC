import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComptionOperationsComponent } from './comption-operations.component';

describe('ComptionOperationsComponent', () => {
  let component: ComptionOperationsComponent;
  let fixture: ComponentFixture<ComptionOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComptionOperationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComptionOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
