import React from 'react';
import '../src/styles/fonts.css';
import { addDecorator } from '@storybook/react';
import { Normalize } from 'styled-normalize';
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';

function withGlobalStyles(storyFn) {
  return (
    <>
      <Normalize />
      <div style={{ margin: '20px' }}>{storyFn()}</div>
    </>
  );
}

addDecorator(withGlobalStyles);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewport: { viewports: MINIMAL_VIEWPORTS }
};
