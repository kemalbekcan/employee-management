import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import pxtorem from 'postcss-pxtorem'

export default {
  syntax: 'postcss-scss',
  plugins: {
    tailwindcss: tailwindcss,
    autoprefixer: autoprefixer,
    'postcss-pxtorem': pxtorem({
      rootValue: 16,
      unitPrecision: 5,
      propList: ['*'],
      selectorBlackList: [],
      replace: true,
      mediaQuery: false,
      minPixelValue: 0,
    }),
  },
};
