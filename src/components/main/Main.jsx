import { useState, useEffect } from 'react'
import { Box, Container, Stack, Typography } from '@mui/material'
import { colors } from '../../constants/colors'
import { Category, Videos } from '../'
import { Api_Service } from "../../service/Api.service"

export default function Main() {
  const [title, setTitle] = useState("New")
  const [videos, setVideos] = useState([])

  const titleHandler = category => { setTitle(category) }

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await Api_Service.fetching(`search?part=snippet&q=${title}`)
        setVideos(data.items)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [title]) // title qaramlik arrayiga qo'shildi

  return (
    <Stack sx={{maxWidth:"1600px", margin: "auto"}}>
      <Category titleHandler={titleHandler}  title={title} />
      <Box p={2} sx={{ height: "90vh" }}>
        <Container maxWidth={"90%"}>
          <Typography variant='h4' fontWeight={"bold"} color={colors.primary} mb={2}>
            {title} <span style={{ color: `${colors.primary}` }}>videos</span>
          </Typography>
          <Videos videos={videos} />
        </Container>
      </Box>
    </Stack>
  )
}
