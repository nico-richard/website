import { NonNullAssert } from '@angular/compiler'
import { Component, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-game1',
  templateUrl: './game1.component.html',
  styleUrls: ['./game1.component.sass'],
})
export class Game1Component implements OnInit {
  numberToGuess: number
  userNumber = new FormControl(0, { nonNullable: true })
  clue: string
  isFound = false

  ngOnInit(): void {
    this.onRefresh()
  }

  onRefresh() {
    this.numberToGuess = Math.round(Math.random() * 100)
    this.isFound = false
    this.userNumber.reset()
    this.clue = ''
  }

  testUserNumber() {
    if (this.userNumber.value > this.numberToGuess) {
      this.clue = 'Lower'
      return
    }
    if (this.userNumber.value < this.numberToGuess) {
      this.clue = 'Higher'
      return
    }
    this.clue = 'Number found !'
    this.isFound = true
  }
}
