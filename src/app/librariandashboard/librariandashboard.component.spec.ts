import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrariandashboardComponent } from './librariandashboard.component';

describe('LibrariandashboardComponent', () => {
  let component: LibrariandashboardComponent;
  let fixture: ComponentFixture<LibrariandashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibrariandashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibrariandashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
