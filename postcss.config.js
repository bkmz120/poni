module.exports = {
  plugins: {
    // Формируем правильный css
    'postcss-global-import': {},
    'postcss-mixins': {},
    'postcss-each': {},
    'postcss-conditionals': {},
    // Включаем линтер
    'stylelint': {},
    // Поcтобработка для совместимости
    'postcss-preset-env': {
      stage: 0,
      'autoprefixer': {
        grid: true,
      },
    },
    // Normalize
    'postcss-normalize': {
      forceImport: false
    },
    // Минифицируем
    'cssnano': {},
  }
}
