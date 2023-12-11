import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrvComponent } from './trv.component';

describe('TrvComponent', () => {
  let component: TrvComponent;
  let fixture: ComponentFixture<TrvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrvComponent]
    });
    fixture = TestBed.createComponent(TrvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
