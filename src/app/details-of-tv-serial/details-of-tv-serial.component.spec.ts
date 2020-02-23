import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsOfTvSerialComponent } from './details-of-tv-serial.component';

describe('DetailsOfTvSerialComponent', () => {
  let component: DetailsOfTvSerialComponent;
  let fixture: ComponentFixture<DetailsOfTvSerialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsOfTvSerialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsOfTvSerialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
