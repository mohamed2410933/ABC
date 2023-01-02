import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentsOperationsComponent } from './agents-operations.component';

describe('AgentsOperationsComponent', () => {
  let component: AgentsOperationsComponent;
  let fixture: ComponentFixture<AgentsOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentsOperationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgentsOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
