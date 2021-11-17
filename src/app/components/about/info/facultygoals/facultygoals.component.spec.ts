import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultygoalsComponent } from './facultygoals.component';

describe('FacultygoalsComponent', () => {
  let component: FacultygoalsComponent;
  let fixture: ComponentFixture<FacultygoalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultygoalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultygoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
