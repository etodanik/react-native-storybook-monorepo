import { ComponentMeta, ComponentStory } from '@storybook/react-native'
import Paragraph from './Paragraph'

const meta: ComponentMeta<typeof Paragraph> = {
  title: 'components/Paragraph',
  component: Paragraph,
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ullamcorper viverra risus, quis lobortis justo euismod et. Mauris sit amet nulla fringilla, efficitur elit sit amet, mollis mauris. Vivamus neque massa, accumsan quis dignissim vel, varius in turpis. Mauris a lectus ac ipsum maximus tempus ac et est. Donec sit amet urna luctus, consequat nisl sit amet, auctor elit. Cras at tellus turpis. Aenean posuere mauris at mauris gravida, vitae elementum turpis hendrerit. Nulla tempor, justo vitae viverra vulputate, diam libero scelerisque odio, vitae egestas augue ante vitae nulla. Mauris non mauris suscipit, consequat diam eget, volutpat mi.'
  }
}

export const basic: ComponentStory<typeof Paragraph> = props => (
  <Paragraph {...props} />
)

export default meta
