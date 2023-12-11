import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwdatadindingComponent } from './twdatadinding.component';

describe('TwdatadindingComponent', () => {
  let component: TwdatadindingComponent;
  let fixture: ComponentFixture<TwdatadindingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwdatadindingComponent]
    });
    fixture = TestBed.createComponent(TwdatadindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
