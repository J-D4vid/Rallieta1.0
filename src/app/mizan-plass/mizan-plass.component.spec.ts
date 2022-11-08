import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MizanPlassComponent } from './mizan-plass.component';

describe('MizanPlassComponent', () => {
  let component: MizanPlassComponent;
  let fixture: ComponentFixture<MizanPlassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MizanPlassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MizanPlassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
