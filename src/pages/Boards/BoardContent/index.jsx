import Box from '@mui/material/Box'

const BoardContent = () => {
  return (
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
  )
}

export default BoardContent
