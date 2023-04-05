import { NonNullAssert } from '@angular/compiler'
import { Component, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-findTheNumber',
  templateUrl: './findTheNumber.component.html',
  styleUrls: ['./findTheNumber.component.sass'],
})
export class FindTheNumberComponent implements OnInit {
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
