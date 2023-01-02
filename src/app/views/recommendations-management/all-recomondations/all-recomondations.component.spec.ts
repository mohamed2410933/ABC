import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRecomondationsComponent } from './all-recomondations.component';

describe('AllRecomondationsComponent', () => {
  let component: AllRecomondationsComponent;
  let fixture: ComponentFixture<AllRecomondationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllRecomondationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllRecomondationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
