import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllExpensesComponent } from './view-all-expenses.component';

describe('ViewAllExpensesComponent', () => {
  let component: ViewAllExpensesComponent;
  let fixture: ComponentFixture<ViewAllExpensesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllExpensesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
