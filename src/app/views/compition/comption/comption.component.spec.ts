import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComptionComponent } from './comption.component';

describe('ComptionComponent', () => {
  let component: ComptionComponent;
  let fixture: ComponentFixture<ComptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
