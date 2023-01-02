import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorsOperationsComponent } from './sectors-operations.component';

describe('SectorsOperationsComponent', () => {
  let component: SectorsOperationsComponent;
  let fixture: ComponentFixture<SectorsOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectorsOperationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectorsOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
