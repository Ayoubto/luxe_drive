import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupConnextionComponent } from './popup-connextion.component';

describe('PopupConnextionComponent', () => {
  let component: PopupConnextionComponent;
  let fixture: ComponentFixture<PopupConnextionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupConnextionComponent]
    });
    fixture = TestBed.createComponent(PopupConnextionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
