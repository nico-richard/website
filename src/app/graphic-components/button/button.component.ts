import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.sass'],
})
export class ButtonComponent {
  @Input() disabled = false
  @Output() customClick = new EventEmitter()

  onClick(event: MouseEvent) {
    console.log('Button clicked, event :', event)
    this.customClick.emit()
  }
}
