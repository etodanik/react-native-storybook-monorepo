import { ThemeProvider } from '@emotion/react'
import useTheme from '../src/hooks/useTheme'

export const parameters = {
  actions: {
    argTypesRegex: '^on[A-Z].*'
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}

export const decorators = [
  Story => {
    const theme = useTheme()

    return (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    )
  }
]
