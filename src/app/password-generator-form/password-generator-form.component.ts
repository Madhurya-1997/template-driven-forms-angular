import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password-generator-form',
  templateUrl: './password-generator-form.component.html',
  styleUrls: ['./password-generator-form.component.css']
})
export class PasswordGeneratorFormComponent implements OnInit {
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  length = 0;
  password = '';

  constructor() { }
  ngOnInit(): void {
  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters
  }
  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers
  }
  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols
  }
  onChangeLength(inputLength: string) {
    this.length = parseInt(inputLength)
  }

  onGenerate() {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()';
    let validChars = '';
    if (this.includeLetters) {
      validChars += letters
    }
    if (this.includeNumbers) {
      validChars += numbers;
    }
    if (this.includeSymbols) {
      validChars += symbols;
    }


    let generatedPassword = '';

    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length)
      generatedPassword += validChars[index]
    }

    this.password = generatedPassword;
  }


}
