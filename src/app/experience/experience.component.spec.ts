import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ExperienceComponent } from './experience.component'

describe('ExperienceComponent', () => {
  let component: ExperienceComponent
  let fixture: ComponentFixture<ExperienceComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExperienceComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  describe('method1', () => {
    it('should ...', () => {
      expect(component).toBeTruthy()
    })
  })
})
