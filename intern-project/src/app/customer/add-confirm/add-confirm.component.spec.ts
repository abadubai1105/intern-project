import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddConfirmComponent } from './add-confirm.component';

describe('AddConfirmComponent', () => {
  let component: AddConfirmComponent;
  let fixture: ComponentFixture<AddConfirmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddConfirmComponent]
    });
    fixture = TestBed.createComponent(AddConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
