import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.sass'],
})
export class LinkComponent {
  @Input() link: string
  @Input() target: string
}
