import Button from '@mui/material/Button'
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material'

import './App.css'

function App() {
  return (
    <>
      <h1>NucMD</h1>
      <Button variant='contained'>
        <AccessAlarm />
        <ThreeDRotation />
        Contained
      </Button>
    </>
  )
}

export default App
