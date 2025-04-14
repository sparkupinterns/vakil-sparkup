import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProprietorshipComponent } from './proprietorship.component';

describe('ProprietorshipComponent', () => {
  let component: ProprietorshipComponent;
  let fixture: ComponentFixture<ProprietorshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProprietorshipComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProprietorshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
