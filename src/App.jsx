import './App.css'
import { useColorScheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Select from '@mui/material/Select'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import Typography from '@mui/material/Typography'
import FormControl from '@mui/material/FormControl'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'

function ModeSelect() {
  const { mode, setMode } = useColorScheme()

  const handleChange = (event) => {
    setMode(event.target.value)
  }

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
      <InputLabel id='select-dark-light-mode'>Mode</InputLabel>
      <Select
        labelId='select-dark-light-mode'
        id='select-dark-light-mode'
        value={mode}
        label='Mode'
        onChange={handleChange}
      >
        <MenuItem value={'light'}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <LightModeIcon fontSize='small' /> Light
          </Box>
        </MenuItem>
        <MenuItem value={'dark'}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <DarkModeIcon fontSize='small' /> Light
          </Box>
        </MenuItem>
        <MenuItem value={'system'}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <SettingsBrightnessIcon fontSize='small' /> Light
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  )
}

function App() {
  return (
    <>
      <h1>NucMD</h1>
      <ModeSelect />
      <Typography variant='h1' gutterBottom>
        h1. Heading
      </Typography>
    </>
  )
}

export default App
