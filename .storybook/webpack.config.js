const path = require('path');

const appSourceDir = path.join(__dirname, '..', 'src');
const toPath = (_path) => path.join(process.cwd(), _path);

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

  config.resolve.alias = {
    ...(config.resolve.alias || {}),
    // https://github.com/storybookjs/storybook/issues/10231#issuecomment-728038867
    '@emotion/core': toPath('node_modules/@emotion/react'),
    'emotion-theming': toPath('node_modules/@emotion/react'),
  };

  return config;
};
