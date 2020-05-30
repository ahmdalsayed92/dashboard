import { TestBed } from '@angular/core/testing';

import { PagesDetailsService } from './pages-details.service';

describe('PagesDetailsService', () => {
  let service: PagesDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PagesDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
