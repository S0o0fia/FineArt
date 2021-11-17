import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyPresidentComponent } from './faculty-president.component';

describe('FacultyPresidentComponent', () => {
  let component: FacultyPresidentComponent;
  let fixture: ComponentFixture<FacultyPresidentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyPresidentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyPresidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
