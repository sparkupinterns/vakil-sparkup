import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LlpComponent } from './llp.component';

describe('LlpComponent', () => {
  let component: LlpComponent;
  let fixture: ComponentFixture<LlpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LlpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LlpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
