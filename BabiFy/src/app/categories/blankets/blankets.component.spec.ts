import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlanketsComponent } from './blankets.component';

describe('BlanketsComponent', () => {
  let component: BlanketsComponent;
  let fixture: ComponentFixture<BlanketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlanketsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlanketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
