import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import 'jest-styled-components';

import Loading from '~/components/Loading';
import theme from '~/styles/theme';

describe('Loading', () => {
  test('renders correctly', () => {
    const loading = render(
      <ThemeProvider theme={theme}>
        <Loading />
      </ThemeProvider>
    );
    expect(loading).toMatchSnapshot();
  });
});
