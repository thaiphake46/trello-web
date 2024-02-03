import Box from '@mui/material/Box'
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded'
import HelpOutlineRoundedIcon from '@mui/icons-material/HelpOutlineRounded'
import AppsIcon from '@mui/icons-material/Apps'
import SvgIcon from '@mui/material/SvgIcon'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Badge from '@mui/material/Badge'
import Tooltip from '@mui/material/Tooltip'
import ModeSelect from '../ModeSelect'
import TrelloIcon from '~/assets/trello.svg?react'
import Workspace from './Menu/Workspace'
import Recent from './Menu/Recent'
import Starred from './Menu/Starred'
import Template from './Menu/Template'
import Profile from './Menu/Profile'

const AppBar = () => {
  return (
    <Box
      px={2}
      sx={{
        width: '100%',
        height: (theme) => theme.trello.appBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <AppsIcon sx={{ color: 'primary.main' }} />
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <SvgIcon
            sx={{ color: 'primary.main' }}
            fontSize='small'
            component={TrelloIcon}
            inheritViewBox
          />

          <Typography
            variant='span'
            sx={{
              fontSize: '1.2rem',
              fontWeight: 'bold',
              color: 'primary.main',
            }}
          >
            Trello
          </Typography>
        </Box>

        <Workspace />
        <Recent />
        <Starred />
        <Template />

        <Button variant='outlined'>Create</Button>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <TextField id='outlined-search' label='Search ...' type='search' size='small' />

        <ModeSelect />

        <Tooltip title='Notification'>
          <Badge color='secondary' variant='dot' sx={{ cursor: 'pointer' }}>
            <NotificationsNoneRoundedIcon sx={{ color: 'primary.main' }} />
          </Badge>
        </Tooltip>

        <Tooltip title='Help'>
          <HelpOutlineRoundedIcon sx={{ cursor: 'pointer', color: 'primary.main' }} />
        </Tooltip>

        <Profile />
      </Box>
    </Box>
  )
}

export default AppBar
