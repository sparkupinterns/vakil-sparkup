import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalkToTrademarkComponent } from './talk-to-trademark.component';

describe('TalkToTrademarkComponent', () => {
  let component: TalkToTrademarkComponent;
  let fixture: ComponentFixture<TalkToTrademarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TalkToTrademarkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TalkToTrademarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
