import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GstRegistrationComponent } from './gst-registration.component';

describe('GstRegistrationComponent', () => {
  let component: GstRegistrationComponent;
  let fixture: ComponentFixture<GstRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GstRegistrationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GstRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
