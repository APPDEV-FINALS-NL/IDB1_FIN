import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MittensComponent } from './mittens.component';

describe('MittensComponent', () => {
  let component: MittensComponent;
  let fixture: ComponentFixture<MittensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MittensComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MittensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
