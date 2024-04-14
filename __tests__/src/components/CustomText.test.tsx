import React from 'react';
import { render } from '@testing-library/react-native'
import CustomText from '../../../src/components/CustomText';

test('CustomText', () => {

  const { getByTestId } = render(<CustomText children={<></>} />)

  expect(getByTestId('CustomText')).toBeTruthy()
})