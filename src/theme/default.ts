export interface Size {
  xs: number
  sm: number
  md: number
  lg: number
  xl: number
}

export default interface ThemeInterface {
  breakpoints: Size
  palette: {
    primary: string
    secondary: string
    white: string
    offwhite: string
    black: string
    darkgrey: string
    grey: string
    lightgrey: string
  }
  spacing: Size
  fontSizes: Size
  misc: {
    radius: number
    animationDuration: string
    inputs: {
      padding: number
    }
    avatar: {
      sm: number
      md: number
      lg: number
    }
  }
}

const unit: number = 8

export const theme: ThemeInterface = {
  breakpoints: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920
  },
  palette: {
    primary: '#EB0000',
    secondary: '#FFCB2D',
    white: '#FFFFFF',
    offwhite: '#F0F4F5',
    black: '#1F1F1F',
    darkgrey: '#282828',
    grey: '#444444',
    lightgrey: '#dddddd'
  },
  spacing: {
    xs: unit,
    sm: unit * 2,
    md: unit * 3,
    lg: unit * 4,
    xl: unit * 5
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 20,
    lg: 24,
    xl: 36
  },
  misc: {
    radius: 3,
    animationDuration: '0.25s',
    inputs: {
      padding: 10
    },
    avatar: {
      sm: 24,
      md: 48,
      lg: 72
    }
  }
}
