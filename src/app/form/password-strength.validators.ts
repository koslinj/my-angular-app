import { AbstractControl, ValidationErrors } from "@angular/forms"

export const PasswordStrengthValidator = function (control: AbstractControl): ValidationErrors | null {

  let value: string = control.value || '';

  if (!value) {
    return null
  }

  let upperCaseCharacters = /[A-Z]+/g
  if (upperCaseCharacters.test(value) === false) {
    return { passwordStrength: `Hasło musi zawierać wielką literę` };
  }

  let lowerCaseCharacters = /[a-z]+/g
  if (lowerCaseCharacters.test(value) === false) {
    return { passwordStrength: `Hasło musi zawierać małą literę` };
  }


  let numberCharacters = /[0-9]+/g
  if (numberCharacters.test(value) === false) {
    return { passwordStrength: `Hasło musi zawierać cyfrę` };
  }


  let specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/
  if (specialCharacters.test(value) === false) {
    return { passwordStrength: `Hasło musi zawierać znak specjalny` };
  }

  if (value.length < 8) {
    return { passwordStrength: `Hasło jest za krótkie` };
  }
  

  return null;
}

export const EmailStrengthValidator = function (control: AbstractControl): ValidationErrors | null {

  let value: string = control.value || '';

  if (!value) {
    return null
  }

  let malpa = /\@/g
  if (malpa.test(value) === false) {
    return { emailStrength: `Email musi zawierać znak "@"` };
  }

  let kropka = /\./g
  if (kropka.test(value) === false) {
    return { emailStrength: `Email musi zawierać znak "."` };
  }
  
  if (value.length < 10) {
    return { emailStrength: `Email jest za krótkie` };
  }

  return null;
}

export const NameStrengthValidator = function (control: AbstractControl): ValidationErrors | null {

  let value: string = control.value || '';

  if (!value) {
    return null
  }

  let upperCaseCharacters = /[A-Z]+/g
  if (upperCaseCharacters.test(value) === false) {
    return { nameStrength: `Imię musi zawierać wielką literę` };
  }

  return null;
}

export const SurnameStrengthValidator = function (control: AbstractControl): ValidationErrors | null {

  let value: string = control.value || '';

  if (!value) {
    return null
  }

  let upperCaseCharacters = /[A-Z]+/g
  if (upperCaseCharacters.test(value) === false) {
    return { SurnameStrength: `Nazwisko musi zawierać wielką literę` };
  }

  return null;
}

export const NickStrengthValidator = function (control: AbstractControl): ValidationErrors | null {

  let value: string = control.value || '';

  if (!value) {
    return null
  }

  if (value.length < 3) {
    return { NickStrength: `Nick jest za krótki` };
  }

  return null;
}