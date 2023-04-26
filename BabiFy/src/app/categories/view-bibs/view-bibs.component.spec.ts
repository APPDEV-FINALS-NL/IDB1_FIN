import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBibsComponent } from './view-bibs.component';

describe('ViewBibsComponent', () => {
  let component: ViewBibsComponent;
  let fixture: ComponentFixture<ViewBibsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBibsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewBibsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
