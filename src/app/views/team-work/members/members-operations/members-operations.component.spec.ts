import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersOperationsComponent } from './members-operations.component';

describe('MembersOperationsComponent', () => {
  let component: MembersOperationsComponent;
  let fixture: ComponentFixture<MembersOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembersOperationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MembersOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
