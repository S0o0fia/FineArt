import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultymessageComponent } from './facultymessage.component';

describe('FacultymessageComponent', () => {
  let component: FacultymessageComponent;
  let fixture: ComponentFixture<FacultymessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultymessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultymessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
