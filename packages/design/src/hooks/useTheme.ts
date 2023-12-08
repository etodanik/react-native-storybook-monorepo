import { useMemo } from 'react'
import { useColorScheme } from 'react-native'
import { dark, light } from '../theme'

export default function useTheme() {
  const scheme = useColorScheme()
  const theme = useMemo(() => (scheme === 'dark' ? dark : light), [scheme])
  return theme
}
