/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { StudentComponent } from './student.component';

describe('Component: Student', () => {
  it('should create an instance', () => {
    let component = StudentComponent;
    expect(component).toBeTruthy();
  });
});
