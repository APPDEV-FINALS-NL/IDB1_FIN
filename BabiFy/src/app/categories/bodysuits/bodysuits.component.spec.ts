import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodysuitsComponent } from './bodysuits.component';

describe('BodysuitsComponent', () => {
  let component: BodysuitsComponent;
  let fixture: ComponentFixture<BodysuitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodysuitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodysuitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
