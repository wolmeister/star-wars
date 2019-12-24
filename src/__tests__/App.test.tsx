import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import App from '~/App';

describe('App', () => {
  test('renders correctly', () => {
    const app = render(<App />);
    expect(app).toMatchSnapshot();
  });
});
