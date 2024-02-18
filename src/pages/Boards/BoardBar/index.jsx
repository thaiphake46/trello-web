import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt'

const BoardBarMenu = (props) => {
  const { label, icon } = props

  return (
    <Chip
      icon={icon}
      label={label}
      clickable
      sx={{
        color: 'primary.main',
        bgcolor: 'white',
        paddingX: '5px',
        borderRadius: '4px',
        '& .MuiSvgIcon-root': {
          color: 'primary.main',
        },
        '&:hover': {
          bgcolor: 'primary.50',
        },
      }}
    />
  )
}

const BoardBar = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: (theme) => theme.trello.boardHeight,
        paddingX: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 1,
        overflowX: 'auto',
        borderTop: '1px solid #00bfa5',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <BoardBarMenu label={'Dashboard'} icon={<DashboardIcon />} />
        <BoardBarMenu label={'Public/Private Workspace'} icon={<VpnLockIcon />} />
        <BoardBarMenu label={'Add to Google Drive'} icon={<AddToDriveIcon />} />
        <BoardBarMenu label={'Automation'} icon={<BoltIcon />} />
        <BoardBarMenu label={'Automation'} icon={<FilterListIcon />} />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button variant='outlined' startIcon={<PersonAddAltIcon />}>
          Invite
        </Button>

        <AvatarGroup
          max={5}
          sx={{
            '& .MuiAvatar-root': {
              height: 36,
              width: 36,
              fontSize: 16,
            },
          }}
        >
          <Tooltip title='huy thai'>
            <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
          </Tooltip>
          <Tooltip title='huy thai'>
            <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
          </Tooltip>
          <Tooltip title='huy thai'>
            <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
          </Tooltip>
          <Tooltip title='huy thai'>
            <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
          </Tooltip>
          <Tooltip title='huy thai'>
            <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
          </Tooltip>
          <Tooltip title='huy thai'>
            <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
          </Tooltip>
          <Tooltip title='huy thai'>
            <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
          </Tooltip>
          <Tooltip title='huy thai'>
            <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
          </Tooltip>
          <Tooltip title='huy thai'>
            <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar
