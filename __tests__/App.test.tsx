import 'react-native-gesture-handler/jestSetup';
import 'react-native';
import React from 'react';

import {it} from '@jest/globals';

import { render } from '@testing-library/react-native'
import { Routes } from '../src/routes';
jest.useFakeTimers()

describe('App.tsx', () => {

  it('will render <Routes /> correctly', async () => {
    render(<Routes />);
  });
});
