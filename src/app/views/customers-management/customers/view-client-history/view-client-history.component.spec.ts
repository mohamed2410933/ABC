import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewClientHistoryComponent } from './view-client-history.component';

describe('ViewClientHistoryComponent', () => {
  let component: ViewClientHistoryComponent;
  let fixture: ComponentFixture<ViewClientHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewClientHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewClientHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
