import { Component } from '@angular/core'
import { Subject } from 'rxjs'

interface Cell {
  type: string
  isOpen: boolean
}

@Component({
  selector: 'app-covid-sweeper',
  templateUrl: './covid-sweeper.component.html',
  styleUrls: ['./covid-sweeper.component.sass'],
})
export class CovidSweeperComponent {
  rowCount = 10
  columnCount = 10
  board: Cell[][] = []
  class: string
  gameLost = false
  debugMode = false
  infoMessage: string

  ngOnInit() {
    for (let row = 0; row <= this.rowCount; row++) {
      let rowContent: Cell[] = []
      for (let box = 0; box <= this.columnCount; box++) {
        Math.round(Math.random() * 100) < 10
          ? rowContent.push({ type: '🦠', isOpen: false })
          : rowContent.push({ type: '🌳', isOpen: false })
      }
      this.board.push(rowContent)
    }
  }

  onOpenCell(cell: Cell) {
    cell.type === '🦠' ? this.onGameLost() : console.log('ok')
    cell.isOpen = true
  }

  onGameLost() {
    this.infoMessage = 'Game Lost !'
  }

  onToggleDebug() {
    this.debugMode = !this.debugMode
  }

  onReset() {
    this.debugMode = false
  }
}
