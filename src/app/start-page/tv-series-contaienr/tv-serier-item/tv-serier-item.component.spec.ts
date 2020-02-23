import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvSerierItemComponent } from './tv-serier-item.component';

describe('TvSerierItemComponent', () => {
  let component: TvSerierItemComponent;
  let fixture: ComponentFixture<TvSerierItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvSerierItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvSerierItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
