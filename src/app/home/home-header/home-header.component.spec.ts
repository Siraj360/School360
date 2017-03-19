/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { HomeHeaderComponent } from './home-header.component';

describe('Component: HomeHeader', () => {
  it('should create an instance', () => {
    let component = new HomeHeaderComponent();
    expect(component).toBeTruthy();
  });
});
