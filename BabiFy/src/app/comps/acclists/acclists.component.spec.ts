import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcclistsComponent } from './acclists.component';

describe('AcclistsComponent', () => {
  let component: AcclistsComponent;
  let fixture: ComponentFixture<AcclistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcclistsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcclistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
