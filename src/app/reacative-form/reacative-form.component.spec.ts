import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReacativeFormComponent } from './reacative-form.component';

describe('ReacativeFormComponent', () => {
  let component: ReacativeFormComponent;
  let fixture: ComponentFixture<ReacativeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReacativeFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReacativeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
