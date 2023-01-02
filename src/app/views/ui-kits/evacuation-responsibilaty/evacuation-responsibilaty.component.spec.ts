import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvacuationResponsibilatyComponent } from './evacuation-responsibilaty.component';

describe('EvacuationResponsibilatyComponent', () => {
  let component: EvacuationResponsibilatyComponent;
  let fixture: ComponentFixture<EvacuationResponsibilatyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvacuationResponsibilatyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvacuationResponsibilatyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
