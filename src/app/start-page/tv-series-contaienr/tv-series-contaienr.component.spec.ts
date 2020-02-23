import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvSeriesContaienrComponent } from './tv-series-contaienr.component';

describe('TvSeriesContaienrComponent', () => {
  let component: TvSeriesContaienrComponent;
  let fixture: ComponentFixture<TvSeriesContaienrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvSeriesContaienrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvSeriesContaienrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
