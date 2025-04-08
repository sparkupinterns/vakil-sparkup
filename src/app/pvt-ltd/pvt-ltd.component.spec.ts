import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PvtLtdComponent } from './pvt-ltd.component';

describe('PvtLtdComponent', () => {
  let component: PvtLtdComponent;
  let fixture: ComponentFixture<PvtLtdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PvtLtdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PvtLtdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
