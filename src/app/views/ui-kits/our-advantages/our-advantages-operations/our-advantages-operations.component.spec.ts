import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurAdvantagesOperationsComponent } from './our-advantages-operations.component';

describe('OurAdvantagesOperationsComponent', () => {
  let component: OurAdvantagesOperationsComponent;
  let fixture: ComponentFixture<OurAdvantagesOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurAdvantagesOperationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurAdvantagesOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
