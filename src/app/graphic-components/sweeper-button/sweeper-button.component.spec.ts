import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { SweeperButtonComponent } from './sweeper-button.component'

describe('SweeperButtonComponent', () => {
  let component: SweeperButtonComponent
  let fixture: ComponentFixture<SweeperButtonComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SweeperButtonComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(SweeperButtonComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  describe('method1', () => {
    it('should ...', () => {
      expect(component).toBeTruthy()
    })
  })
})
