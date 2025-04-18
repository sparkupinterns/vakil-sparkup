import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComapanyRegistrationComponent } from './comapany-registration.component';

describe('ComapanyRegistrationComponent', () => {
  let component: ComapanyRegistrationComponent;
  let fixture: ComponentFixture<ComapanyRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComapanyRegistrationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComapanyRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
