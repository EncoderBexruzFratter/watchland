import { Box, Stack } from '@mui/material'
import { Video_card, Channel_card  } from "../";

const Videos = ({ videos }) => {
    return (
        <Stack width={"100%"} direction={"row"} flexWrap={"wrap"} alignItems={"center"} gap={1}>
            {videos.map((item) => (
                <Box key={item.id.videoId}> {/* Unikal kalit qo'shildi */}
                    {item.id.videoId && <Video_card video={item} />}
                    {item.id.channelId && <Channel_card video={item} />}
                </Box>
            ))}
        </Stack>
    )
}

export default Videos
