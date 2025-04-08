import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcComponent } from './opc.component';

describe('OpcComponent', () => {
  let component: OpcComponent;
  let fixture: ComponentFixture<OpcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpcComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
