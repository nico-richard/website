import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { AchievementComponent } from './achievement.component'

describe('AchievementComponent', () => {
  let component: AchievementComponent
  let fixture: ComponentFixture<AchievementComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AchievementComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(AchievementComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  describe('method1', () => {
    it('should ...', () => {
      expect(component).toBeTruthy()
    })
  })
})
