import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Starup1Component } from './starup1.component';

describe('Starup1Component', () => {
  let component: Starup1Component;
  let fixture: ComponentFixture<Starup1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Starup1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Starup1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
