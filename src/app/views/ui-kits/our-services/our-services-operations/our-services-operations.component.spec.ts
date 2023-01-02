import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurServicesOperationsComponent } from './our-services-operations.component';

describe('OurServicesOperationsComponent', () => {
  let component: OurServicesOperationsComponent;
  let fixture: ComponentFixture<OurServicesOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurServicesOperationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurServicesOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
