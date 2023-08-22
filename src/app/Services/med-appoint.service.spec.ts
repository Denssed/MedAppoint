import { TestBed } from '@angular/core/testing';

import { MedAppointService } from './med-appoint.service';

describe('MedAppointService', () => {
  let service: MedAppointService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedAppointService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
