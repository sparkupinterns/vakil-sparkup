import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalkToCaComponent } from './talk-to-ca.component';

describe('TalkToCaComponent', () => {
  let component: TalkToCaComponent;
  let fixture: ComponentFixture<TalkToCaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TalkToCaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TalkToCaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
