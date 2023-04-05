import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'app-sweeper-button',
  templateUrl: './sweeper-button.component.html',
  styleUrls: ['./sweeper-button.component.sass'],
})
export class SweeperButtonComponent {
  @Input() disabled = false
  @Input() cellType: string
  @Output() customClick = new EventEmitter()
  cellClass = ''

  onClick() {
    this.customClick.emit()
    console.log(`Button ${this.cellType} clicked`)
    this.cellClass = this.cellType === '🦠' ? 'red' : 'green'
  }
}
