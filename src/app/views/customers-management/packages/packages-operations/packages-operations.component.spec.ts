import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagesOPerationsComponent } from './packages-operations.component';

describe('PackagesOPerationsComponent', () => {
  let component: PackagesOPerationsComponent;
  let fixture: ComponentFixture<PackagesOPerationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackagesOPerationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackagesOPerationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
