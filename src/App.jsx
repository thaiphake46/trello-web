import './App.css'
import { useColorScheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Container from '@mui/material/Container'
import InputLabel from '@mui/material/InputLabel'
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
            <DarkModeIcon fontSize='small' /> Dark
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
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      <Box
        sx={{
          backgroundColor: 'primary.light',
          width: '100%',
          height: (theme) => theme.trello.appBarHeight,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <ModeSelect />
      </Box>
      <Box
        sx={{
          backgroundColor: 'primary.dark',
          width: '100%',
          height: (theme) => theme.trello.boardHeight,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        Board bar
      </Box>
      <Box
        sx={{
          backgroundColor: 'primary.main',
          width: '100%',
          height: (theme) =>
            `calc(100vh - (${theme.trello.appBarHeight} + ${theme.trello.boardHeight}))`,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        Board content
      </Box>
    </Container>
  )
}

export default App
