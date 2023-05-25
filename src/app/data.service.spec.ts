import { TestBed } from '@angular/core/testing';
import { DataService } from "./data.service";

describe("DataService", () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
  });

  describe('method1', () => {
    it('should ...', () => {
      expect(service).toBeTruthy();
    });
  });
});
