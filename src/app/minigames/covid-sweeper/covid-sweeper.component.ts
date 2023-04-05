import { Component } from '@angular/core'
import { FormControl } from '@angular/forms'

interface Cell {
  type: string
  isOpen: boolean
  class: string
}

@Component({
  selector: 'app-covid-sweeper',
  templateUrl: './covid-sweeper.component.html',
  styleUrls: ['./covid-sweeper.component.sass'],
})
export class CovidSweeperComponent {
  rowCount = 10
  columnCount = 10
  board: Cell[][]
  gameLost: boolean
  debugMode: boolean
  infoMessage: string
  difficulty: number
  gameSet: boolean

  ngOnInit() {
    this.gameSet = false
    this.gameLost = false
    this.debugMode = false
    this.difficulty = 10
  }

  onStart() {
    this.gameSet = true
    this.initCells(this.difficulty)
  }

  onDifficultyChange(event: any) {
    this.difficulty = event.target.value
  }

  onOpenCell(cell: Cell) {
    if (!this.gameLost) {
      if (cell.type === '🦠') {
        this.onGameLost()
      }
      cell.isOpen = true
    }
  }

  onGameLost() {
    this.infoMessage = 'Game Lost !'
    this.gameLost = true
    this.board.forEach((row) =>
      row.forEach((cell) => {
        cell.class = 'game-lost'
      })
    )
  }

  onToggleDebug() {
    this.debugMode = !this.debugMode
  }

  onReset() {
    if (this.gameSet) {
      this.infoMessage = ''
      this.gameLost = false
      this.debugMode = false
      this.initCells(this.difficulty)
    }
  }

  private initCells(size: number) {
    console.log('initCells : ' + size)
    this.board = []
    for (let row = 0; row <= size; row++) {
      let rowContent: Cell[] = []
      for (let cell = 0; cell <= size; cell++) {
        Math.round(Math.random() * 100) < 10
          ? rowContent.push({ type: '🦠', isOpen: false, class: '' })
          : rowContent.push({ type: '🌳', isOpen: false, class: '' })
      }
      this.board.push(rowContent)
    }
  }
}
