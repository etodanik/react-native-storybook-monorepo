import { getStorybookUI } from '@storybook/react-native'
import registerRootComponent from 'expo/build/launch/registerRootComponent'
import './storybook.requires'

const Storybook = getStorybookUI({
  shouldPersistSelection: true
})

registerRootComponent(Storybook)
