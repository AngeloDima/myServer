import { TestBed } from '@angular/core/testing';

import { ScuolaService } from './scuola.service';

describe('ScuolaService', () => {
  let service: ScuolaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScuolaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
