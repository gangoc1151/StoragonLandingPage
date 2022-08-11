import { extendTheme } from "@chakra-ui/react"
import { createBreakpoints } from '@chakra-ui/theme-tools'

const breakpoints = createBreakpoints({
    sm: '375px',
    md: '768px',
    lg: '1024px',
    xl: '1320px',
    '2xl': '1440px',
    '3xl': '1600px'
})

const theme = {
  styles: {
    global: {
      'html, body': {
        color: 'black',
      },
      p: {
        color: 'black'
      }
    },
  },
}

const colors = {
    white: {
      1: '#ffffff',
    },
    gray:{
      1:'#BCBCBC',
      2:'#F3F3F3',
      3: '#F2F5F8'
    },
    green: {
      1: '#00C0A6'
    },
    button:{
      1: '#0BBDAA',
      2: '#D7D7D7',
      3: '#333333',
      4: '#0BBDAA'
    },
    heading: {
      1: '#084C94'
    },
    text: {
      1: '#393939'
    },
    bg:{
      1: '#AAE0FF'
    },
    blue:{
      1: '#0A68FE',
      2: '#D8F2FF',
      3: '#6452DF',
      4: '#94EDFC',
      5: '#C4D5FF',
      6: '#7892F6'

    },
    yellow: {
      1: '#FFE28E',
      2: '#F0D4A9',
      3: '#FFF1C7',
      4: '#FDE7A4',
      5: '#FFF6DB'
    },
    purple: {
      1: '#C34AF5',
      2: '#871AF1',
      3: '#B738FE'
    },
    pink: {
      1: '#FF9BFC',
      2: '#F8B8F5'
    }
}

const fontWeights = {
  hairline: 100,
  thin: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900
}





const customTheme = extendTheme({
    breakpoints,
    theme,
    colors,
    fontWeights
  })

export default customTheme