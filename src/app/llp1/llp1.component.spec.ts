import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Llp1Component } from './llp1.component';

describe('Llp1Component', () => {
  let component: Llp1Component;
  let fixture: ComponentFixture<Llp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Llp1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Llp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
