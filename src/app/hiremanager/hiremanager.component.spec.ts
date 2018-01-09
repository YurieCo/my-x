import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HiremanagerComponent } from './hiremanager.component';

describe('HiremanagerComponent', () => {
  let component: HiremanagerComponent;
  let fixture: ComponentFixture<HiremanagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HiremanagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HiremanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
