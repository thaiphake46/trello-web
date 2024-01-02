import Box from '@mui/material/Box'

const BoardBar = () => {
  return (
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
  )
}

export default BoardBar
