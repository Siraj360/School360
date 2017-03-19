/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import {FilterPipe } from './data-filter.pipe';

describe('Pipe: DataFilter', () => {
  it('create an instance', () => {
    let pipe = new FilterPipe();
    expect(pipe).toBeTruthy();
  });
});
