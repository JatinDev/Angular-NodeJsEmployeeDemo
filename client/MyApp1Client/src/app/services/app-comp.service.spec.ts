import { TestBed } from '@angular/core/testing';

import { AppCompService } from './app-comp.service';

describe('AppCompService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppCompService = TestBed.get(AppCompService);
    expect(service).toBeTruthy();
  });
});
