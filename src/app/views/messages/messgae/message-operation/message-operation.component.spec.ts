import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageOperationComponent } from './message-operation.component';

describe('MessageOperationComponent', () => {
  let component: MessageOperationComponent;
  let fixture: ComponentFixture<MessageOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageOperationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessageOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
