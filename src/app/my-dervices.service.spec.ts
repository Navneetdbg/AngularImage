import { TestBed } from '@angular/core/testing';

import { MyDervicesService } from './my-dervices.service';

describe('MyDervicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyDervicesService = TestBed.get(MyDervicesService);
    expect(service).toBeTruthy();
  });
});
