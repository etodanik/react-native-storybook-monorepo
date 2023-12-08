export type Theme = {
  colors: {
    background: string
    text: string
  }
}

// Theme used for day mode or if device doesn't support dark mode
export const light: Theme = {
  colors: {
    background: 'white',
    text: 'black'
  }
}

// Theme used when dark mode is enabled
export const dark: Theme = {
  colors: {
    background: 'black',
    text: 'white'
  }
}
