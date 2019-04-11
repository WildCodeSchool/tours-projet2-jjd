import { TestBed } from '@angular/core/testing';

import { EstablishmentService } from './establishment.service';

describe('EtablishmentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EstablishmentService = TestBed.get(EstablishmentService);
    expect(service).toBeTruthy();
  });
});
