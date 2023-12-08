import { ComponentMeta, ComponentStory } from '@storybook/react-native'
import Title from './Title'

const meta: ComponentMeta<typeof Title> = {
  title: 'components/Title',
  component: Title,
  args: {
    children: 'Lorem ipsum dolor dicit'
  }
}

export const basic: ComponentStory<typeof Title> = props => <Title {...props} />

export default meta
