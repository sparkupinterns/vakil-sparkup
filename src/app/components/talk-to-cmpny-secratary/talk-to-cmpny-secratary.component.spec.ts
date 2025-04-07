import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalkToCmpnySecrataryComponent } from './talk-to-cmpny-secratary.component';

describe('TalkToCmpnySecrataryComponent', () => {
  let component: TalkToCmpnySecrataryComponent;
  let fixture: ComponentFixture<TalkToCmpnySecrataryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TalkToCmpnySecrataryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TalkToCmpnySecrataryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
