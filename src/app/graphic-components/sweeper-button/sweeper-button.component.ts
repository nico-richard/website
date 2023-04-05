import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'app-sweeper-button',
  templateUrl: './sweeper-button.component.html',
  styleUrls: ['./sweeper-button.component.sass'],
})
export class SweeperButtonComponent {
  @Input() disabled = false
  @Input() type: string
  @Input() class = ''

  @Output() customClick = new EventEmitter()

  onClick() {
    this.customClick.emit()
    console.log(`Button ${this.type} clicked`)
  }
}
