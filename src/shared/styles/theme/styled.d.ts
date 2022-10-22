import 'styled-components'
import { darkTheme } from './defaultTheme'

type ThemeType = typeof darkTheme

declare module 'styled-components' {
   export interface DefaultTheme extends ThemeType {}
}