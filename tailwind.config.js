const plugin = require('tailwindcss/plugin');
// const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        blackFont: [
          '-apple-system',
          'Noto Sans',
          'Helvetica Neue',
          'Helvetica',
          'Nimbus Sans L',
          'Arial',
          'Liberation Sans',
          'PingFang SC',
          'Hiragino Sans GB',
          'Noto Sans CJK SC',
          'Source Han Sans SC',
          'Source Han Sans CN',
          'Microsoft YaHei',
          'Wenquanyi Micro Hei',
          'WenQuanYi Zen Hei',
          'ST Heiti',
          'SimHei',
          'WenQuanYi Zen Hei Sharp',
          'sans-serif',
        ],
        poppins: ['Poppins', 'Avenir', 'sans-serif'],
      },
      colors: {
        'new-blue': {
          5: '#EBF2FF',
          60: '#2979FF',
        },
        'new-gray': {
          0: '#F7F7FA',
          2: '#4F4F4F',
          50: '#787885',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('daisyui'),
    plugin(function ({ addVariant, e, postcss }) {
      addVariant('firefox', ({ container, separator }) => {
        const isFirefoxRule = postcss.atRule({
          name: '-moz-document',
          params: 'url-prefix()',
        });
        isFirefoxRule.append(container.nodes);
        container.append(isFirefoxRule);
        isFirefoxRule.walkRules((rule) => {
          rule.selector = `.${e(`firefox${separator}${rule.selector.slice(1)}`)}`;
        });
      });
    }),
  ],
  // daisyUI config (optional)
  daisyui: {
    styled: true,
    themes: [
      {
        light: {
          ...require('daisyui/src/colors/themes')['[data-theme=light]'],
          primary: '#2979FF',
        },
      },
      {
        dark: {
          ...require('daisyui/src/colors/themes')['[data-theme=dark]'],
          primary: '#2979FF',
        },
      },
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
    darkTheme: 'dark',
  },
};
