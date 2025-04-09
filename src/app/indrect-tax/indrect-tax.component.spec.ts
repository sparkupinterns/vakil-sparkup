import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndrectTaxComponent } from './indrect-tax.component';

describe('IndrectTaxComponent', () => {
  let component: IndrectTaxComponent;
  let fixture: ComponentFixture<IndrectTaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndrectTaxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndrectTaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
