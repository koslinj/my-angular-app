import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { FormBuilder, FormGroup, Validators } from "@angular/forms"
import { PasswordStrengthValidator } from "./password-strength.validators"
import { EmailStrengthValidator } from './password-strength.validators'
import { NameStrengthValidator } from './password-strength.validators'
import { SurnameStrengthValidator } from './password-strength.validators'
import { NickStrengthValidator } from './password-strength.validators'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public form: FormGroup;

  constructor(fb: FormBuilder) {

    this.form = fb.group({
      password: ['', [Validators.required, PasswordStrengthValidator]],
      email: ['', [Validators.required, EmailStrengthValidator]],
      name: ['', [Validators.required, NameStrengthValidator]],
      surname: ['', [Validators.required, SurnameStrengthValidator]],
      nick: ['', [Validators.required, NickStrengthValidator]]
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
      email: event.target.email.value
    };
    this.studenci.push(daneStudenta);
  }

  ngOnInit(): void {
  }


  


}
