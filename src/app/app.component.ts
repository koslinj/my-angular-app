import { OnInit, Component } from '@angular/core';
import { Student } from './student';
import { FormBuilder, FormGroup, Validators } from "@angular/forms"
import { PasswordStrengthValidator } from "./password-strengh.validator"
import { EmailStrengthValidator } from './password-strengh.validator'
import { NameStrengthValidator } from './password-strengh.validator'
import { SurnameStrengthValidator } from './password-strengh.validator'
import { NickStrengthValidator } from './password-strengh.validator'
import { TelStrengthValidator } from "./password-strengh.validator"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  public form: FormGroup;

  constructor(fb: FormBuilder) {

    this.form = fb.group({
      password: ['', [Validators.required, PasswordStrengthValidator]],
      email: ['', [Validators.required, EmailStrengthValidator]],
      name: ['', [Validators.required, NameStrengthValidator]],
      surname: ['', [Validators.required, SurnameStrengthValidator]],
      nick: ['', [Validators.required, NickStrengthValidator]],
      tel: ['', [Validators.required, TelStrengthValidator]],
      date: ['', [Validators.required]],
      gender: ['', [Validators.required]]
    });



  }

  studenci: Student[] = [];
  
  dodajStudenta(event: any){
    event.preventDefault();
    const daneStudenta = {
      imie: event.target.imie.value,
      nazwisko: event.target.nazwisko.value,
      nick: event.target.nick.value,
      haslo: event.target.haslo.value,
      email: event.target.email.value,
    };
    this.studenci.push(daneStudenta);
  }

  games: {name: string, img: string}[] = [
    { name: 'Wybierz gre...', img: '' },
    { name: 'Counter Strike: Global Offensive', img: 'assets/csgo.jpg' },
    { name: 'League of Legends', img: 'assets/lol.jpg' },
    { name: 'FIFA 22', img: 'assets/fifa.jpg' },
    { name: 'Fortnite', img: 'assets/fortnite.jpg' },
  ];

  selectedGame: {name: string, img: string} = this.games[0];

  title = 'my-angular-app';

  regions: {name: string}[] = [
    { name: 'Wybierz region...'},
    { name: 'EUROPA'},
    { name: 'AMERYKA'},
    { name: 'AFRYKA'},
    { name : 'AZJA'},
  ];
  selectedRegion: {name: string} = this.regions[0];
  
  public show:boolean = false;
  public buttonName:any = 'Show';

  ngOnInit () {  }

  toggle() {
    this.show = !this.show;
  }

}
