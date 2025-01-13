import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SbooksComponent } from './sbooks.component';

describe('SbooksComponent', () => {
  let component: SbooksComponent;
  let fixture: ComponentFixture<SbooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SbooksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
