import Typography from 'typography'
import theme from 'typography-theme-fairy-gates'

let accentColor = '#555'

theme.googleFonts = [
  {
    name: 'Open Sans',
    styles: [
      '300',
      '400'
    ],
  }
]

theme.baseFontSize = '16px'
theme.headerFontFamily = ['Open Sans', 'sans-serif']
theme.bodyFontFamily = ['Open Sans', 'sans-serif']
theme.bodyWeight = 'normal'

theme.overrideThemeStyles = ({ rhythm }, options, styles) => ({
  'h1,h2': {
    color: accentColor,
    fontWeight: 400,
    textTransform: 'uppercase',
    letterSpacing: '0.1em'
  },
  'h1': {
    fontSize: '1.2em',
  },
  'h2': {
    fontSize: '1.0em',
  },
  'a': {
    fontWeight: 400,
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    color: accentColor
  },
  'a:hover': {
    // color: primaryColor
  },

  'small': {
    fontSize: '0.8em',
    color: '#999',
  }
})


const typography = new Typography(theme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale