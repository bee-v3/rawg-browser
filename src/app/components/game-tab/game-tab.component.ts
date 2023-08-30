import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/interfaces/game';

@Component({
  selector: 'app-game-tab',
  templateUrl: './game-tab.component.html',
  styleUrls: ['./game-tab.component.scss']
})
export class GameTabComponent implements OnInit {
  @Input() game!: Game;
  
  constructor() { }

  ngOnInit(): void {
  }

}
