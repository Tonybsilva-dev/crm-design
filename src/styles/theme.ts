import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  styles: {
    fonts: {
      heading: 'Roboto',
      body: 'Roboto'
    },    
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.900',
      }
    }
  }
})