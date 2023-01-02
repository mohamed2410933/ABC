import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketOperationsComponent } from './market-operations.component';

describe('MarketOperationsComponent', () => {
  let component: MarketOperationsComponent;
  let fixture: ComponentFixture<MarketOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketOperationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
