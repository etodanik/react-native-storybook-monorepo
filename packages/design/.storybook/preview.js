import { SafeAreaView } from 'react-native'

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
  Story => (
    <SafeAreaView>
      <Story />
    </SafeAreaView>
  )
]
