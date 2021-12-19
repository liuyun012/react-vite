/*
 * @Author: Qzx
 * @Date: 2020-05-04 11:45:21
 * @Description: less样式规范检查
 * @LastEditors: Qzx
 * @LastEditTime: 2020-05-04 11:47:52
 */
module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-css-modules"
  ],
  plugins: ['stylelint-order'],
  rules: {
    "no-descending-specificity": null,
    "no-duplicate-selectors": null,
    "font-family-no-missing-generic-family-keyword": null,
    "block-opening-brace-space-before": "always",
    "declaration-block-trailing-semicolon": null,
    'order/order': [
      'declarations',
      'custom-properties',
      'dollar-variables',
      'rules',
      'at-rules'
    ],
    'order/properties-order': [
      'position',
      'top',
      'bottom',
      'left',
      'right',
      'z-index',
      'float',
      'display',
      'flex-direction',
      'flex-wrap',
      'flex-flow',
      'justify-content',
      'align-items',
      'align-self',
      'flex',
      'order',
      'box-sizing',

      'width',
      'min-width',
      'max-width',
      'height',
      'min-height',
      'max-height',
      'padding',
      'padding-left',
      'padding-top',
      'padding-right',
      'padding-bottom',
      'margin',
      'margin-left',
      'margin-top',
      'margin-right',
      'margin-bottom',
      'overflow',
      'overflow-x',
      'overflow-y',

      'font',
      'font-size',
      'font-weight',
      'font-family',
      'line-height',
      'text-align',
      'vertical-align',
      'text-indent',
      'white-space',
      'word-spacing',

      'color',
      'background',
      'background-color',
      'background-image',
      'background-position',
      'background-size',
      'background-repeat',
      'border',
      'border-radius',
      'box-shadow',

      'cursor',
      'opacity',
      'transform',
      'transition',
      'transition-property',
      'transition-duration',
      'transition-delay',
      'animation',
      'animation-name',
      'animation-duration',
      'animation-delay',
      'will-change'
    ],
  }
}
