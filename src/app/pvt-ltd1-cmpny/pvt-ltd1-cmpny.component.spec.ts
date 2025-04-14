import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PvtLtd1CmpnyComponent } from './pvt-ltd1-cmpny.component';

describe('PvtLtd1CmpnyComponent', () => {
  let component: PvtLtd1CmpnyComponent;
  let fixture: ComponentFixture<PvtLtd1CmpnyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PvtLtd1CmpnyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PvtLtd1CmpnyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
