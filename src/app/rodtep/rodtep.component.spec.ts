import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RodtepComponent } from './rodtep.component';

describe('RodtepComponent', () => {
  let component: RodtepComponent;
  let fixture: ComponentFixture<RodtepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RodtepComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RodtepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
