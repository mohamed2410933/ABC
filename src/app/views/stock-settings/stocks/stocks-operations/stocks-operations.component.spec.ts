import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StocksOperationsComponent } from './stocks-operations.component';

describe('StocksOperationsComponent', () => {
  let component: StocksOperationsComponent;
  let fixture: ComponentFixture<StocksOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StocksOperationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StocksOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
