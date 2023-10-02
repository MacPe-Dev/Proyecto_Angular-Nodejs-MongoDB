import { TestBed } from '@angular/core/testing';

import { GestareasService } from './gestareas.service';

describe('GestareasService', () => {
  let service: GestareasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestareasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
