import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderOperationsComponent } from './slider-operations.component';

describe('SliderOperationsComponent', () => {
  let component: SliderOperationsComponent;
  let fixture: ComponentFixture<SliderOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderOperationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
