import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMovieOrShowComponent } from './add-movie-or-show.component';

describe('AddMovieOrShowComponent', () => {
  let component: AddMovieOrShowComponent;
  let fixture: ComponentFixture<AddMovieOrShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMovieOrShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMovieOrShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
