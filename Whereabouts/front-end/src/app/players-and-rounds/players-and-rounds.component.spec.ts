import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersAndRoundsComponent } from './players-and-rounds.component';

describe('PlayersAndRoundsComponent', () => {
  let component: PlayersAndRoundsComponent;
  let fixture: ComponentFixture<PlayersAndRoundsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayersAndRoundsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersAndRoundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
