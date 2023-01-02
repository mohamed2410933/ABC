import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendationtypesComponent } from './recommendationtypes.component';

describe('RecommendationtypesComponent', () => {
  let component: RecommendationtypesComponent;
  let fixture: ComponentFixture<RecommendationtypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecommendationtypesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecommendationtypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
