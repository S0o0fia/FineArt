import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyvisionComponent } from './facultyvision.component';

describe('FacultyvisionComponent', () => {
  let component: FacultyvisionComponent;
  let fixture: ComponentFixture<FacultyvisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyvisionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyvisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
