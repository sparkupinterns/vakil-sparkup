import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartUpComponent } from './start-up.component';

describe('StartUpComponent', () => {
  let component: StartUpComponent;
  let fixture: ComponentFixture<StartUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartUpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
