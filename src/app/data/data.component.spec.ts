import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { DataComponent } from './data.component'

describe('DataComponent', () => {
  let component: DataComponent
  let fixture: ComponentFixture<DataComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DataComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(DataComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  describe('method1', () => {
    it('should ...', () => {
      expect(component).toBeTruthy()
    })
  })
})
