import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryWiseAnalysisComponent } from './category-wise-analysis.component';

describe('CategoryWiseAnalysisComponent', () => {
  let component: CategoryWiseAnalysisComponent;
  let fixture: ComponentFixture<CategoryWiseAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryWiseAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryWiseAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
