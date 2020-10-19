import { TestBed } from '@angular/core/testing';

import { TodoDatabaseService } from './todo-database.service';

describe('TodoDatabaseService', () => {
  let service: TodoDatabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoDatabaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
