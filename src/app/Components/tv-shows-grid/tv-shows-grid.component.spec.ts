import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvShowsGridComponent } from './tv-shows-grid.component';

describe('TvShowsGridComponent', () => {
  let component: TvShowsGridComponent;
  let fixture: ComponentFixture<TvShowsGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvShowsGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvShowsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
