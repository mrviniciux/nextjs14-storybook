import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  // Required
  framework: '@storybook/nextjs',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  docs: {
    autodocs: 'tag',
  },
  staticDirs: ['../public'],
};

export default config;
