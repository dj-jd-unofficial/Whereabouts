import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players-and-rounds',
  templateUrl: './players-and-rounds.component.html',
  styleUrls: ['./players-and-rounds.component.css']
})
export class PlayersAndRoundsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  playerSliderValue: number = 1;
  
}
