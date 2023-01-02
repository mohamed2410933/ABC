import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsOperationsComponent } from './news-operations.component';

describe('NewsOperationsComponent', () => {
  let component: NewsOperationsComponent;
  let fixture: ComponentFixture<NewsOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsOperationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
