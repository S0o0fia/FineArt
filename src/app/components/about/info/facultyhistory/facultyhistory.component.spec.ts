import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyhistoryComponent } from './facultyhistory.component';

describe('FacultyhistoryComponent', () => {
  let component: FacultyhistoryComponent;
  let fixture: ComponentFixture<FacultyhistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyhistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
