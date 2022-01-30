import merge from 'lodash/merge'

import colors from './colors'

const breakpoints = [
  ['phone_small', 320],
  ['phone', 376],
  ['phablet', 540],
  ['tablet', 735],
  ['tablet_medium', 1024],
  ['desktop', 1070],
  ['desktop_medium', 1280],
  ['desktop_large', 1440],
]

const fonts = {
  title: "'Poppins', 'Helvetica Neue', 'Arial', sans-serif",
  body: "'Libre Baskerville', Georgia, Serif",
}

const colorModeTransition =
  'background 0.25s var(--ease-in-out-quad), color 0.25s var(--ease-in-out-quad)'

export default merge({
  initialColorMode: 'light',
  useCustomProperties: true,
  colorModeTransition,
  colors,
  fonts,
  breakpoints,
})
