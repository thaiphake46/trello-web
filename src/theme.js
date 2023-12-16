// import { createTheme } from '@mui/material/styles'
import { experimental_extendTheme as extendTheme } from '@mui/material/styles'
import { cyan, deepOrange, orange, teal } from '@mui/material/colors'

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: deepOrange,
        secondary: teal,
      },
    },
    dark: {
      palette: {
        primary: orange,
        secondary: cyan,
      },
    },
  },
  // ...other properties
})

export default theme
