import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  games: {name: string, img: string}[] = [
    { name: 'Wybierz gre...', img: '' },
    { name: 'Counter Strike: Global Offensive', img: 'assets/csgo.jpg' },
    { name: 'League of Legends', img: 'assets/lol.jpg' },
    { name: 'FIFA 22', img: 'assets/fifa.jpg' },
    { name: 'Dota2', img: 'assets/dota.jpg' },
    { name: 'Smite', img: 'assets/smite.jpg' }
  ];

  selectedGame: {name: string, img: string} = this.games[0];

  title = 'my-angular-app';

  
}
