import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsReportsComponent } from './charts-reports.component';

describe('ChartsReportsComponent', () => {
  let component: ChartsReportsComponent;
  let fixture: ComponentFixture<ChartsReportsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartsReportsComponent]
    });
    fixture = TestBed.createComponent(ChartsReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
