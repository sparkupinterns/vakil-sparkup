import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalkToLawyerComponent } from './talk-to-lawyer.component';

describe('TalkToLawyerComponent', () => {
  let component: TalkToLawyerComponent;
  let fixture: ComponentFixture<TalkToLawyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TalkToLawyerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TalkToLawyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
