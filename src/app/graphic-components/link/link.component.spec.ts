import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { LinkComponent } from './link.component'

describe('LinkComponent', () => {
  let component: LinkComponent
  let fixture: ComponentFixture<LinkComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LinkComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  describe('method1', () => {
    it('should ...', () => {
      expect(component).toBeTruthy()
    })
  })
})
