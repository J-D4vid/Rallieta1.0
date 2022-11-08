import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelicatessenComponent } from './delicatessen.component';

describe('DelicatessenComponent', () => {
  let component: DelicatessenComponent;
  let fixture: ComponentFixture<DelicatessenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelicatessenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DelicatessenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
