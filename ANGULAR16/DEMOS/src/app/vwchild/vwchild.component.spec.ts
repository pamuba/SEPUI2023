import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VwchildComponent } from './vwchild.component';

describe('VwchildComponent', () => {
  let component: VwchildComponent;
  let fixture: ComponentFixture<VwchildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VwchildComponent]
    });
    fixture = TestBed.createComponent(VwchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
