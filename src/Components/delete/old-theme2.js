import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            light: '#00afb9',
            main: '#0081a7',
            dark: '#ff9292'
        },
        secondary:{
            light: '#fdfcdc',
            main: '#fed9b7',
            dark: '#f07167',
        },
        tertiary:{
            light: '#FFFFFF',
            main: '#FFFFFF',
            dark: '#FFFFFF',
        }        
      },
      text: {
        primary: '#FFFFFF',
        secondary: '#46505A',
      }
})

export default theme;