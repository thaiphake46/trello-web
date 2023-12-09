import { useColorScheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import './App.css'

function ModeToggle() {
  const { mode, setMode } = useColorScheme()
  return (
    <Button
      variant='contained'
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light')
      }}
    >
      {mode === 'light' ? 'Turn dark' : 'Turn light'}
    </Button>
  )
}

function App() {
  return (
    <>
      <h1>NucMD</h1>
      <ModeToggle />
      <Typography variant='h1' gutterBottom>
        h1. Heading
      </Typography>
    </>
  )
}

export default App
