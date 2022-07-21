module.exports = {
  stories: ['../projects/client-application/**/*.stories.mdx', '../projects/client-application/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: '@storybook/angular',
  core: {
    builder: '@storybook/builder-webpack5'
  }
};
