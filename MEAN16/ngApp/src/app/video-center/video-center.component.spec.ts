import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCenterComponent } from './video-center.component';

describe('VideoCenterComponent', () => {
  let component: VideoCenterComponent;
  let fixture: ComponentFixture<VideoCenterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideoCenterComponent]
    });
    fixture = TestBed.createComponent(VideoCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
