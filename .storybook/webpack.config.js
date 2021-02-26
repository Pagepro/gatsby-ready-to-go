const path = require('path');

const appSourceDir = path.join(__dirname, '..', 'src');

module.exports = ({ config }) => {
  config.resolve.extensions.push('.ts', '.tsx', '.d.ts');

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: [require.resolve('babel-preset-react-app')],
    },
  });

  // Disable the Storybook internal-`.svg`-rule for components loaded from our app.
  const svgRule = config.module.rules.find((rule) =>
    'test.svg'.match(rule.test),
  );
  svgRule.exclude = [appSourceDir];

  config.module.rules.push({
    test: /\.svg$/i,
    include: [appSourceDir],
    use: [
      {
        loader: '@svgr/webpack',
        options: {
          svgoConfig: {
            plugins: [
              {
                prefixIds: false,
              },
            ],
          },
        },
      },
    ],
  });

  config.module.rules.push({
    test: /\.stories\.tsx?$/,
    loaders: [
      {
        loader: require.resolve('@storybook/source-loader'),
        options: {
          parser: 'typescript',
        },
      },
    ],
    enforce: 'pre',
  });

  config.resolve.modules.push(path.resolve(__dirname, '../src'));

  return config;
};
