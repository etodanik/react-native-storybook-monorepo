import styled from '@emotion/native'
import { ThemeProvider } from '@emotion/react'
import Paragraph from 'design/src/components/Paragraph'
import Title from 'design/src/components/Title'
import useTheme from 'design/src/hooks/useTheme'
import { StatusBar } from 'expo-status-bar'
import {
  useSafeAreaInsets,
  SafeAreaProvider
} from 'react-native-safe-area-context'

export default function App() {
  const theme = useTheme()

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <StatusBar style="auto" />
        <Index />
      </ThemeProvider>
    </SafeAreaProvider>
  )
}

function Index() {
  const insets = useSafeAreaInsets()

  return (
    <ScrollView
      contentInset={insets}
      contentContainerStyle={{ paddingHorizontal: 20 }}
    >
      <Title>Lorem ipsum dolor dicit</Title>
      <Paragraph>
        Sed ac dui at ipsum dictum finibus ac ut lorem. Cras in leo id tortor
        commodo bibendum nec non magna. Praesent lacinia ante lacinia orci
        dictum, quis varius ipsum consectetur. Proin id neque eget odio pulvinar
        volutpat. Nunc ac erat et lectus ornare imperdiet ac in elit.
        Pellentesque at enim ac dolor sagittis porttitor ac at arcu. Phasellus
        in felis eu erat tincidunt commodo. Ut tellus odio, euismod eget
        placerat sed, sagittis in libero.
      </Paragraph>
      <Paragraph>
        Praesent iaculis fermentum commodo. Praesent lobortis est augue, in
        mattis eros ultrices sit amet. Proin pharetra hendrerit odio, vitae
        eleifend libero placerat et. Sed tortor mi, laoreet dapibus tortor quis,
        sagittis dapibus neque. In iaculis sit amet odio nec porttitor. Donec
        condimentum, tortor in egestas pharetra, velit odio tincidunt nunc, et
        tincidunt nisi justo sit amet nulla. In hac habitasse platea dictumst.
        Ut sed faucibus lorem. Quisque sagittis leo est, eu tempus tortor
        feugiat et. Etiam faucibus efficitur faucibus. Maecenas commodo dictum
        dui, ut rhoncus dui. Integer hendrerit, erat id auctor egestas, mi leo
        semper leo, at varius elit augue ut magna.
      </Paragraph>
    </ScrollView>
  )
}

const ScrollView = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`
