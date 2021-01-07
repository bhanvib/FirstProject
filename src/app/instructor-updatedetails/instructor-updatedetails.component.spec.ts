import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorUpdatedetailsComponent } from './instructor-updatedetails.component';

describe('InstructorUpdatedetailsComponent', () => {
  let component: InstructorUpdatedetailsComponent;
  let fixture: ComponentFixture<InstructorUpdatedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructorUpdatedetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorUpdatedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
